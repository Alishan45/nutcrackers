import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateAdminReplyEmail } from '../server/email-templates.ts';

dotenv.config();

const clientEmail = process.argv[2] || 'alishan.cs01@gmail.com';
const clientName = process.argv[3] || 'Valued Prospective Client';
const refId = process.argv[4] || `NC-261110-TEST`;

console.log(`Sending Template 3 Admin Reply to: ${clientEmail} (${clientName}) [Ref: ${refId}]...`);

const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = parseInt(process.env.SMTP_PORT || '587');
const smtpUser = process.env.SMTP_USER || 'alishan.cs01@gmail.com';
const smtpPass = (process.env.SMTP_APP_PASSWORD || '').replace(/\s+/g, '');
const adminEmail = process.env.CONTACT_EMAIL || 'alishan.cs01@gmail.com';

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: process.env.SMTP_SECURE === 'true',
  auth: { user: smtpUser, pass: smtpPass },
});

const rendered = generateAdminReplyEmail({
  refId,
  clientName,
  clientEmail,
  messageBody: `Thank you for reaching out to Nutcrackers!\n\nOur engineering team has evaluated your technical specifications. We have architected an initial roadmap for your project and would be glad to walk you through our milestone delivery structure.\n\nPlease let us know what time works best for a brief 20-minute discovery session.`,
  originalService: 'Mobile App & Web Development',
  originalDescription: 'Comprehensive full-stack web and mobile application with high-concurrency database integration.',
});

async function main() {
  const info = await transporter.sendMail({
    from: `"Ali Shan · Nutcrackers" <${smtpUser}>`,
    to: clientEmail,
    replyTo: adminEmail,
    subject: rendered.subject,
    text: rendered.text,
    html: rendered.html,
    headers: {
      'In-Reply-To': `<${refId}@nutcrackers.agency>`,
      'References': `<${refId}@nutcrackers.agency>`,
      'X-Inquiry-Ref': refId,
    },
  });

  console.log('✅ Template 3 Admin Reply Sent Successfully!');
  console.log('Message ID:', info.messageId);
}

main().catch(console.error);
