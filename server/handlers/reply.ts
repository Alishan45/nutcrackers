import nodemailer from 'nodemailer';
import { generateAdminReplyEmail, AdminReplyPayload } from '../email-templates';

export async function handleAdminReplyRequest(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const {
    refId,
    clientName,
    clientEmail,
    subject,
    messageBody,
    originalService,
    originalDescription,
    adminSecret,
  } = req.body || {};

  // Simple admin auth check if ADMIN_SECRET is set
  const expectedSecret = process.env.ADMIN_SECRET;
  if (expectedSecret && adminSecret !== expectedSecret) {
    return res.status(401).json({ error: 'Unauthorized: Invalid administrative credentials.' });
  }

  // Validation
  if (!refId || typeof refId !== 'string') {
    return res.status(400).json({ error: 'Inquiry reference ID (refId) is required.' });
  }
  if (!clientName || typeof clientName !== 'string') {
    return res.status(400).json({ error: 'Client name is required.' });
  }
  if (!clientEmail || typeof clientEmail !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim())) {
    return res.status(400).json({ error: 'A valid client email address is required.' });
  }
  if (!messageBody || typeof messageBody !== 'string' || messageBody.trim().length < 5) {
    return res.status(400).json({ error: 'A reply message body of at least 5 characters is required.' });
  }

  const cleanRef = refId.trim();
  const cleanName = clientName.trim();
  const cleanEmail = clientEmail.trim();
  const cleanBody = messageBody.trim();

  // Configure Nodemailer Transporter
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER || 'alishan.cs01@gmail.com';
  const smtpPass = (process.env.SMTP_APP_PASSWORD || '').replace(/\s+/g, '');
  const adminEmail = process.env.CONTACT_EMAIL || 'alishan.cs01@gmail.com';

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ error: 'SMTP configuration is missing on server.' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const payload: AdminReplyPayload = {
    refId: cleanRef,
    clientName: cleanName,
    clientEmail: cleanEmail,
    subject: subject?.trim(),
    messageBody: cleanBody,
    originalService: originalService?.trim(),
    originalDescription: originalDescription?.trim(),
  };

  const rendered = generateAdminReplyEmail(payload);

  try {
    const info = await transporter.sendMail({
      from: `"Ali Shan · Nutcrackers" <${smtpUser}>`,
      to: cleanEmail,
      replyTo: adminEmail,
      subject: rendered.subject,
      text: rendered.text,
      html: rendered.html,
      headers: {
        'In-Reply-To': `<${cleanRef}@nutcrackers.agency>`,
        'References': `<${cleanRef}@nutcrackers.agency>`,
        'X-Inquiry-Ref': cleanRef,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Reply successfully sent to ${cleanEmail}.`,
      messageId: info.messageId,
      refId: cleanRef,
    });
  } catch (err: any) {
    console.error('[Admin Reply] Delivery error:', err);
    return res.status(500).json({
      error: 'Failed to deliver client reply.',
      technicalDetails: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
}
