import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const { name, email, phone = '', service = '', message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Câmpuri lipsă: name, email și message sunt obligatorii.' },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Adresă de email invalidă.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      requireTLS: true,
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
      tls: { minVersion: 'TLSv1.2' },
    });

    await transporter.verify();

    const subject = `PCS Shuttle | Cerere contact de la ${name}`;

    const text = [
      'Ai primit un mesaj de pe formularul de contact:',
      '',
      `Nume: ${name}`,
      `Email: ${email}`,
      phone ? `Telefon: ${phone}` : '',
      service ? `Serviciu: ${service}` : '',
      '',
      'Mesaj:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f9; padding:24px; color:#111;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" 
               style="max-width:600px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="background:#2a3f54; padding:20px; text-align:center; color:#fff;">
              <h1 style="margin:0; font-size:20px; letter-spacing:0.5px;">PCS Shuttle — Formular Contact</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 12px; font-size:15px; line-height:1.6;">Ai primit un mesaj nou prin formularul de contact:</p>
              
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:12px;">
                <tr>
                  <td style="padding:8px 0; font-weight:bold; width:120px;">Nume:</td>
                  <td style="padding:8px 0;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Email:</td>
                  <td style="padding:8px 0;">${escapeHtml(email)}</td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Telefon:</td>
                  <td style="padding:8px 0;">${escapeHtml(phone)}</td>
                </tr>` : ''}
                ${service ? `
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Serviciu:</td>
                  <td style="padding:8px 0;">${escapeHtml(service)}</td>
                </tr>` : ''}
              </table>
              
              <div style="margin-top:20px;">
                <p style="margin:0 0 6px; font-weight:bold;">Mesaj:</p>
                <div style="background:#f9fafc; border:1px solid #e0e6ed; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; white-space:pre-wrap;">
                  ${escapeHtml(message)}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#f0f2f5; padding:16px; text-align:center; font-size:12px; color:#666;">
              Acest mesaj a fost trimis de pe site-ul <strong>PCS Shuttle</strong>.<br/>
              ${new Date().toLocaleString('ro-RO')}
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject,
      text,
      html,
      // replyTo: email,
      envelope: {
        from: process.env.SMTP_USER!,
        to: process.env.MAIL_TO!,
      },
    });

    return NextResponse.json({ ok: true, message: 'Mesajul a fost trimis cu succes.' });
  } catch (err) {
    console.error('[contact] Eroare la trimiterea emailului:', err);
    return NextResponse.json({ error: 'A apărut o eroare la trimiterea mesajului.' }, { status: 500 });
  }
}
