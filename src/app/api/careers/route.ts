import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type CareersSubmission = {
  name: string;
  phone: string;
  email: string;
  role: string;
  city: string;
  experience: string;
  resumeLink: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let data: Partial<CareersSubmission>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, role, city, experience, resumeLink, message } = data;

  if (!isNonEmptyString(name) || !isNonEmptyString(phone) || !isNonEmptyString(email) || !isNonEmptyString(role) || !isNonEmptyString(resumeLink)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CAREERS_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Not configured yet — fail loudly in logs so this is easy to spot,
    // but don't leak configuration details to the client.
    console.error("Careers form: SMTP environment variables are not set.");
    return NextResponse.json(
      { error: "Application email isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT ?? 465);
  const to = CAREERS_TO_EMAIL || SMTP_USER;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // Hostinger: 465 = SSL, 587 = STARTTLS
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"1DM Careers" <${SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `Job application: ${role} — ${name}`,
      text: [
        `Role: ${role}`,
        `Preferred city: ${city || "No preference"}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Experience: ${experience || "—"}`,
        `Resume link: ${resumeLink}`,
        "",
        "Message:",
        message || "—",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers form: failed to send email", err);
    return NextResponse.json(
      { error: "Couldn't send your application. Please email us directly." },
      { status: 502 }
    );
  }
}
