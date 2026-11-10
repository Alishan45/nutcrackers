import nodemailer from 'nodemailer';
import { 
  generateAdminNotificationEmail, 
  generateClientConfirmationEmail,
  EmailPayload 
} from '../email-templates';

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

/**
 * Generates an inquiry reference ID in the format: NC-YYMMDD-XXXX
 */
function generateReferenceId(): string {
  const now = new Date();
  const year = now.getUTCFullYear().toString().slice(2);
  const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = now.getUTCDate().toString().padStart(2, '0');
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `NC-${year}${month}${day}-${randomChars}`;
}

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

  const clientIp = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').toString();

  // 1. Rate limiting check (max 5 submissions per 10 minutes in production)
  const isLocalhost = clientIp.includes('127.0.0.1') || clientIp.includes('::1') || clientIp === 'unknown';
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const timestamps = (rateLimitMap.get(clientIp) || []).filter(t => now - t < windowMs);
  if (!isLocalhost && timestamps.length >= 5) {
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
    console.warn(`[Contact API] Honeypot triggered from IP: ${clientIp}`);
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
  const refId = generateReferenceId();

  // 4. Configure Nodemailer Transporter
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER || 'alishan.cs01@gmail.com';
  const smtpPass = (process.env.SMTP_APP_PASSWORD || '').replace(/\s+/g, '');
  const recipientEmail = process.env.CONTACT_EMAIL || 'alishan.cs01@gmail.com';

  if (!smtpUser || !smtpPass) {
    console.error('SMTP credentials missing on server.');
    return res.status(500).json({
      error: 'Server email configuration is missing. Please contact via WhatsApp (+92 312 5355078) directly.'
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

  const emailData: EmailPayload = {
    refId,
    name: cleanName,
    email: cleanEmail,
    company: cleanCompany,
    service: cleanService,
    budget: cleanBudget,
    description: cleanDescription,
    clientIp,
    timestamp: new Date().toUTCString(),
  };

  const adminEmail = generateAdminNotificationEmail(emailData);
  const clientConfirmation = generateClientConfirmationEmail(emailData);

  try {
    // 5. Send Notification Email to Nutcrackers Administrator (alishan.cs01@gmail.com)
    // IMPORTANT: Reply-To is set to client's email so clicking Reply replies directly to client.
    const adminMailPromise = transporter.sendMail({
      from: `"Nutcrackers Inquiries" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: adminEmail.subject,
      text: adminEmail.text,
      html: adminEmail.html,
      headers: {
        'X-Inquiry-Ref': refId,
        'X-Client-Email': cleanEmail,
      }
    });

    // 6. Send Confirmation Auto-responder to Prospective Client
    // SENDER is authenticated admin email, Reply-To is admin email
    const clientMailPromise = transporter.sendMail({
      from: `"Nutcrackers" <${smtpUser}>`,
      to: cleanEmail,
      replyTo: recipientEmail,
      subject: clientConfirmation.subject,
      text: clientConfirmation.text,
      html: clientConfirmation.html,
      headers: {
        'X-Inquiry-Ref': refId,
      }
    });

    // Await both dispatches
    const [adminInfo, clientInfo] = await Promise.all([adminMailPromise, clientMailPromise]);

    // Record rate-limit timestamp
    timestamps.push(now);
    rateLimitMap.set(clientIp, timestamps);

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully delivered to Nutcrackers. A confirmation receipt has been sent to your email.',
      referenceId: refId,
      adminMessageId: adminInfo.messageId,
      clientMessageId: clientInfo.messageId,
    });
  } catch (err: any) {
    console.error('Nodemailer SMTP two-way delivery error:', err);
    return res.status(500).json({
      error: 'Email dispatch encountered an issue. Please reach out to us on WhatsApp (+92 312 5355078) for instant assistance.',
      technicalDetails: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}
