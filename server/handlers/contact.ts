import nodemailer from 'nodemailer';

interface ContactRequestBody {
  fullName: string;
  email: string;
  companyName?: string;
  serviceRequired: string;
  projectBudget?: string;
  description: string;
  honeypot?: string; // Hidden spam trap
}

// In-memory rate limiter: IP -> timestamps
const rateLimitMap = new Map<string, number[]>();

const ALLOWED_SERVICES = [
  'Video Editing',
  'Digital Marketing',
  'Mobile App & Web Development',
  'AI Website Agent',
  'AI Automation',
  'Data Science',
  'Data Analysis',
];

export async function handleContactRequest(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

  // 1. Rate limiting check (max 5 submissions per 10 minutes)
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const timestamps = (rateLimitMap.get(clientIp) || []).filter(t => now - t < windowMs);
  if (timestamps.length >= 5) {
    return res.status(429).json({ 
      error: 'Too many inquiries sent from this address. Please wait a few minutes or reach out directly on WhatsApp (+92 312 5355078).' 
    });
  }

  const {
    fullName,
    email,
    companyName = '',
    serviceRequired,
    projectBudget = 'Not Specified',
    description,
    honeypot = ''
  }: ContactRequestBody = req.body || {};

  // 2. Honeypot check (spam bots filling hidden fields)
  if (honeypot) {
    return res.status(200).json({ success: true, message: 'Inquiry received.' });
  }

  // 3. Validation
  const errors: Record<string, string> = {};

  if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'A valid email address is required.';
  }
  if (!serviceRequired || !ALLOWED_SERVICES.includes(serviceRequired)) {
    errors.serviceRequired = 'Please select a valid Nutcrackers service.';
  }
  if (!description || typeof description !== 'string' || description.trim().length < 10) {
    errors.description = 'Please provide a project description of at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed.', details: errors });
  }

  // Sanitize text inputs
  const cleanName = fullName.trim().slice(0, 100).replace(/[<>]/g, '');
  const cleanEmail = email.trim().slice(0, 100);
  const cleanCompany = companyName.trim().slice(0, 100).replace(/[<>]/g, '');
  const cleanService = serviceRequired;
  const cleanBudget = projectBudget.trim().slice(0, 50);
  const cleanDescription = description.trim().slice(0, 4000).replace(/[<>]/g, '');

  // 4. Configure Nodemailer Transporter
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER || 'alishan.cs01@gmail.com';
  const smtpPass = (process.env.SMTP_APP_PASSWORD || '').replace(/\s+/g, '');
  const recipientEmail = process.env.CONTACT_EMAIL || 'alishan.cs01@gmail.com';

  if (!smtpUser || !smtpPass) {
    console.error('SMTP credentials missing on server.');
    return res.status(500).json({
      error: 'Server email configuration is missing. Please contact via WhatsApp directly.'
    });
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

  // 5. Professional Nutcrackers Branded HTML Email Template
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090A0F; color: #F3F4F6; margin: 0; padding: 24px; }
      .container { max-width: 620px; margin: 0 auto; background: #0D0E16; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; overflow: hidden; }
      .header { padding: 32px; background: linear-gradient(135deg, #12131F 0%, #1A132F 100%); border-bottom: 1px solid rgba(255,255,255,0.08); text-align: center; }
      .brand-title { color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; margin: 0; }
      .brand-sub { color: #F59E0B; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; }
      .badge { display: inline-block; padding: 6px 14px; background: rgba(45, 212, 191, 0.15); border: 1px solid rgba(45, 212, 191, 0.4); color: #2DD4BF; border-radius: 999px; font-size: 12px; font-weight: 600; margin-top: 14px; }
      .body-content { padding: 32px; }
      .field-row { margin-bottom: 20px; }
      .field-label { color: #9CA3AF; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace; margin-bottom: 4px; }
      .field-value { color: #FFFFFF; font-size: 15px; font-weight: 600; }
      .desc-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 18px; border-radius: 14px; color: #E5E7EB; line-height: 1.6; font-size: 14px; white-space: pre-wrap; }
      .footer { padding: 20px 32px; background: #07080D; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 12px; color: #6B7280; font-family: monospace; }
      .cta-btn { display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #A855F7, #6366F1); color: #FFFFFF; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 13px; margin-top: 16px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1 class="brand-title">Nutcrackers</h1>
        <div class="brand-sub">AI & Digital Solutions Agency</div>
        <div class="badge">⚡ New Lead Received</div>
      </div>
      <div class="body-content">
        <div class="field-row">
          <div class="field-label">Client Name</div>
          <div class="field-value">${cleanName}</div>
        </div>
        <div class="field-row">
          <div class="field-label">Email Address</div>
          <div class="field-value"><a href="mailto:${cleanEmail}" style="color: #A855F7; text-decoration: none;">${cleanEmail}</a></div>
        </div>
        ${cleanCompany ? `
        <div class="field-row">
          <div class="field-label">Company / Organization</div>
          <div class="field-value">${cleanCompany}</div>
        </div>` : ''}
        <div class="field-row">
          <div class="field-label">Requested Service</div>
          <div class="field-value" style="color: #2DD4BF;">${cleanService}</div>
        </div>
        <div class="field-row">
          <div class="field-label">Estimated Budget Bracket</div>
          <div class="field-value" style="color: #FBBF24;">${cleanBudget}</div>
        </div>
        <div class="field-row">
          <div class="field-label">Project Requirements & Scope</div>
          <div class="desc-box">${cleanDescription}</div>
        </div>
        <div style="text-align: center;">
          <a href="mailto:${cleanEmail}?subject=Re:%20Nutcrackers%20Project%20Inquiry%20-%20${encodeURIComponent(cleanService)}" class="cta-btn">
            Reply Directly to Client →
          </a>
        </div>
      </div>
      <div class="footer">
        Nutcrackers Agency Lead Pipeline · Received on ${new Date().toUTCString()} · IP: ${clientIp}
      </div>
    </div>
  </body>
  </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Nutcrackers Inquiries" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: `New Project Inquiry: ${cleanName} (${cleanService}) — Nutcrackers`,
      text: `New Inquiry for Nutcrackers\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nCompany: ${cleanCompany || 'N/A'}\nService: ${cleanService}\nBudget: ${cleanBudget}\n\nDescription:\n${cleanDescription}\n\nSent from: ${clientIp}`,
      html: htmlContent,
    });

    // Record rate-limit timestamp
    timestamps.push(now);
    rateLimitMap.set(clientIp, timestamps);

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully delivered to Nutcrackers. We will review your project scope and follow up promptly.',
      messageId: info.messageId,
    });
  } catch (err: any) {
    console.error('Nodemailer SMTP delivery error:', err);
    return res.status(500).json({
      error: 'Email dispatch encountered an issue. Please reach out to us on WhatsApp (+92 312 5355078) for instant support.',
      technicalDetails: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}
