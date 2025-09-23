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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const { name, email, phone = '', service = '', message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Câmpuri lipsă: name, email și message sunt obligatorii.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Adresă de email invalidă.' }, { status: 400 });
    }

    let host = process.env.SMTP_HOST;
    let portStr = process.env.SMTP_PORT;
    let user = process.env.SMTP_USER;
    let pass = process.env.SMTP_PASS;
    let from = process.env.MAIL_FROM || user || '';
    let to = process.env.MAIL_TO || user || '';

    let useTestAccount = false;

    // Dacă nu avem config SMTP, în dezvoltare folosim cont de test Ethereal
    if (!host || !portStr || !user || !pass || !from || !to) {
      if (process.env.NODE_ENV !== 'production') {
        const account = await nodemailer.createTestAccount();
        host = 'smtp.ethereal.email';
        portStr = '587';
        user = account.user;
        pass = account.pass;
        from = account.user;
        to = account.user;
        useTestAccount = true;
      } else {
        return NextResponse.json({ error: 'Configurația SMTP este incompletă. Verifică variabilele de mediu.' }, { status: 500 });
      }
    }

    const port = Number(portStr);
    const secure = port === 465; // true pentru 465, altfel false

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user: String(user), pass: String(pass) },
    });

    const subject = `PCS Shuttle | Cerere contact de la ${name}`;

    const text = `Ai primit un mesaj de pe formularul de contact:\n\n` +
      `Nume: ${name}\n` +
      `Email: ${email}\n` +
      (phone ? `Telefon: ${phone}\n` : '') +
      (service ? `Serviciu: ${service}\n` : '') +
      `\nMesaj:\n${message}\n`;

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#111">
        <h2 style="margin:0 0 12px">Formular Contact — PCS Shuttle</h2>
        <p style="margin:0 0 8px"><strong>Nume:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p style="margin:0 0 8px"><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${service ? `<p style="margin:0 0 8px"><strong>Serviciu:</strong> ${escapeHtml(service)}</p>` : ''}
        <p style="margin:12px 0 4px"><strong>Mesaj:</strong></p>
        <pre style="white-space:pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px;">${escapeHtml(message)}</pre>
      </div>
    `;

    const info = await transporter.sendMail({ from, to, subject, text, html });

    if (useTestAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      return NextResponse.json({ ok: true, message: 'Mesajul a fost trimis (cont de test).', previewUrl });
    }

    return NextResponse.json({ ok: true, message: 'Mesajul a fost trimis cu succes.' });
  } catch (err) {
    console.error('[contact] Eroare la trimiterea emailului:', err);
    return NextResponse.json({ error: 'A apărut o eroare la trimiterea mesajului.' }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}