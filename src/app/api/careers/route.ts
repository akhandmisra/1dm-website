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

  // Trim every SMTP value defensively — a stray trailing space or newline
  // picked up when copying a password into Vercel's dashboard or a local
  // .env.local file is a common, invisible cause of "535 authentication
  // failed" even when the password is correct. Webmail login forms almost
  // always trim input automatically; a raw environment variable does not.
  const smtpHost = SMTP_HOST.trim();
  const smtpUser = SMTP_USER.trim();
  const smtpPass = SMTP_PASS.trim();
  if (smtpPass !== SMTP_PASS || smtpUser !== SMTP_USER || smtpHost !== SMTP_HOST) {
    console.warn("Careers form: SMTP_HOST/SMTP_USER/SMTP_PASS had leading/trailing whitespace — trimmed automatically.");
  }

  const port = Number(SMTP_PORT ?? 465);
  // Deliberately NOT falling back to SMTP_USER here — the same SMTP account
  // now sends mail for both this form and the Contact form, so the
  // destination inbox has to stay pinned to career@ regardless of which
  // mailbox is doing the actual sending.
  const to = CAREERS_TO_EMAIL || "career@1dollarmoffee.com";

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465, // Hostinger: 465 = SSL, 587 = STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"1DM Careers" <${smtpUser}>`,
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
