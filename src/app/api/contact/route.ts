import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let data: Partial<ContactSubmission>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, reason, message } = data;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Shares the same SMTP login as the Careers form (one mailbox — info@ —
  // handles sending for the whole site) — but WHERE each form's mail lands
  // is a separate decision, pinned explicitly below rather than left to
  // follow whichever account happens to be doing the sending. General
  // inquiries drop on hello@, the address shown publicly on the site as
  // the contact email — not info@, which is only the sending account.
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP environment variables are not set.");
    return NextResponse.json(
      { error: "Contact email isn't configured yet. Please email us directly." },
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
    console.warn("Contact form: SMTP_HOST/SMTP_USER/SMTP_PASS had leading/trailing whitespace — trimmed automatically.");
  }

  const port = Number(SMTP_PORT ?? 465);
  const to = CONTACT_TO_EMAIL || "hello@1dollarmoffee.com";

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
      from: `"1DM Website" <${smtpUser}>`,
      to,
      replyTo: email,
      subject: `New inquiry: ${reason || "General"} — ${name}`,
      text: [
        `Reason: ${reason || "General inquiry"}`,
        `Name: ${name}`,
        `Phone: ${phone || "—"}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Please email us directly." },
      { status: 502 }
    );
  }
}
