export interface EmailPayload {
  refId: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  description: string;
  clientIp?: string;
  timestamp?: string;
}

export interface AdminReplyPayload {
  refId: string;
  clientName: string;
  clientEmail: string;
  subject?: string;
  messageBody: string;
  originalService?: string;
  originalDescription?: string;
}

/**
 * Common styles and header for Nutcrackers emails
 */
const BRAND_HEADER = `
  <div style="background: linear-gradient(135deg, #090A0F 0%, #151624 50%, #1E1238 100%); padding: 36px 32px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <div style="display: inline-block; margin-bottom: 12px;">
      <table cellpadding="0" cellspacing="0" border="0" align="center">
        <tr>
          <td style="vertical-align: middle; padding-right: 12px;">
            <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); border-radius: 10px; text-align: center; line-height: 36px; font-weight: 900; color: #090A0F; font-size: 20px; font-family: monospace;">
              N
            </div>
          </td>
          <td style="vertical-align: middle; text-align: left;">
            <div style="color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              Nutcrackers
            </div>
            <div style="color: #2DD4BF; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">
              AI &amp; Digital Solutions Agency
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
`;

const BRAND_FOOTER = `
  <div style="padding: 24px 32px; background: #07080D; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 11px; color: #6B7280; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6;">
    <p style="margin: 0 0 8px 0; color: #9CA3AF;">
      <strong>Nutcrackers</strong> · AI &amp; Digital Solutions Agency
    </p>
    <p style="margin: 0 0 8px 0;">
      Engineering Video Production · Web &amp; Mobile Apps · AI Agents &amp; Automations · Data Intelligence
    </p>
    <p style="margin: 0; font-family: monospace; color: #4B5563;">
      Direct Email: <a href="mailto:alishan.cs01@gmail.com" style="color: #2DD4BF; text-decoration: none;">alishan.cs01@gmail.com</a> · WhatsApp: <a href="https://wa.me/923125355078" style="color: #A855F7; text-decoration: none;">+92 312 5355078</a> · Islamabad / Wah Cantt, PK
    </p>
  </div>
`;

// ============================================================================
// TEMPLATE 1: New Client Inquiry Notification (To: alishan.cs01@gmail.com)
// ============================================================================
export function generateAdminNotificationEmail(data: EmailPayload) {
  const subject = `New Project Inquiry — Nutcrackers | ${data.service} [Ref: ${data.refId}]`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050608; color: #F3F4F6; margin: 0; padding: 24px;">
  <div style="max-width: 620px; margin: 0 auto; background: #0D0E16; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
    
    ${BRAND_HEADER}

    <div style="padding: 32px;">
      <!-- Reference ID & Priority Badge -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
        <tr>
          <td style="text-align: left;">
            <span style="display: inline-block; padding: 6px 14px; background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.4); color: #C084FC; border-radius: 999px; font-size: 11px; font-weight: 700; font-family: monospace; letter-spacing: 0.5px;">
              ⚡ Ref: ${data.refId}
            </span>
          </td>
          <td style="text-align: right;">
            <span style="display: inline-block; padding: 6px 14px; background: rgba(45, 212, 191, 0.12); border: 1px solid rgba(45, 212, 191, 0.4); color: #2DD4BF; border-radius: 999px; font-size: 11px; font-weight: 700;">
              New Client Lead
            </span>
          </td>
        </tr>
      </table>

      <h2 style="font-size: 18px; font-weight: 700; color: #FFFFFF; margin: 0 0 20px 0; letter-spacing: -0.3px;">
        Prospective Client Project Overview
      </h2>

      <!-- Client Info Table -->
      <table width="100%" cellpadding="10" cellspacing="0" border="0" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; margin-bottom: 24px;">
        <tr>
          <td style="width: 35%; color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.04);">Client Name</td>
          <td style="color: #FFFFFF; font-size: 14px; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.04);">${data.name}</td>
        </tr>
        <tr>
          <td style="color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.04);">Client Email</td>
          <td style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <a href="mailto:${data.email}" style="color: #A855F7; text-decoration: none; font-size: 14px; font-weight: 600;">${data.email}</a>
          </td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.04);">Company / Brand</td>
          <td style="color: #FFFFFF; font-size: 14px; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.04);">${data.company}</td>
        </tr>` : ''}
        <tr>
          <td style="color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.04);">Selected Service</td>
          <td style="color: #2DD4BF; font-size: 14px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.04);">${data.service}</td>
        </tr>
        <tr>
          <td style="color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px;">Budget Bracket</td>
          <td style="color: #FBBF24; font-size: 14px; font-weight: 600;">${data.budget || 'Not Specified'}</td>
        </tr>
      </table>

      <!-- Project Requirements Box -->
      <div style="margin-bottom: 24px;">
        <div style="color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px; margin-bottom: 8px;">
          Project Requirements &amp; Scope:
        </div>
        <div style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); padding: 20px; border-radius: 14px; color: #E5E7EB; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${data.description}</div>
      </div>

      <!-- Quick Reply Action -->
      <div style="text-align: center; padding: 16px 0;">
        <a href="mailto:${data.email}?subject=Re:%20Your%20Inquiry%20[Ref:%20${data.refId}]%20—%20Nutcrackers" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%); color: #FFFFFF; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 14px; letter-spacing: -0.2px; box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4);">
          Reply to ${data.name} →
        </a>
        <div style="color: #9CA3AF; font-size: 11px; margin-top: 10px; font-family: monospace;">
          (Tip: Simply hitting "Reply" in your email client will automatically reply to ${data.email})
        </div>
      </div>

      <!-- Telemetry Meta -->
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: #6B7280; font-family: monospace;">
        Received: ${data.timestamp || new Date().toUTCString()} · Origin IP: ${data.clientIp || 'unknown'}
      </div>
    </div>

    ${BRAND_FOOTER}
  </div>
</body>
</html>
  `;

  const text = `
NEW PROJECT INQUIRY — NUTCRACKERS
Reference ID: ${data.refId}
Timestamp: ${data.timestamp || new Date().toUTCString()}
--------------------------------------------------

CLIENT DETAILS:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company || 'Not Specified'}
- Requested Service: ${data.service}
- Budget Bracket: ${data.budget || 'Not Specified'}

PROJECT REQUIREMENTS & SCOPE:
${data.description}

--------------------------------------------------
HOW TO REPLY:
Hit "Reply" in your email client to send an email directly to ${data.email}, or send a message to mailto:${data.email}?subject=Re:%20Your%20Inquiry%20[Ref:%20${data.refId}]%20—%20Nutcrackers.

Origin IP: ${data.clientIp || 'unknown'}
Nutcrackers Agency Pipeline · alishan.cs01@gmail.com
  `.trim();

  return { subject, html, text };
}

// ============================================================================
// TEMPLATE 2: Client Inquiry Confirmation (To: Client)
// ============================================================================
export function generateClientConfirmationEmail(data: EmailPayload) {
  const subject = `We've Received Your Inquiry — Nutcrackers [Ref: ${data.refId}]`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050608; color: #F3F4F6; margin: 0; padding: 24px;">
  <div style="max-width: 620px; margin: 0 auto; background: #0D0E16; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
    
    ${BRAND_HEADER}

    <div style="padding: 36px 32px;">
      <!-- Greeting -->
      <h2 style="font-size: 20px; font-weight: 700; color: #FFFFFF; margin: 0 0 14px 0; letter-spacing: -0.3px;">
        Thank You for Reaching Out, ${data.name}!
      </h2>
      
      <p style="font-size: 14px; line-height: 1.6; color: #D1D5DB; margin: 0 0 24px 0;">
        We have successfully received your project inquiry. Our technical directors and solutions architects are reviewing your requirements to provide a thoughtful, high-impact approach tailored to your timeline and goals.
      </p>

      <!-- Reference ID Badge -->
      <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(45, 212, 191, 0.08) 100%); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: 14px; padding: 18px; margin-bottom: 28px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="color: #9CA3AF; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px;">
              Your Inquiry Reference ID
            </td>
            <td style="text-align: right; color: #A855F7; font-size: 14px; font-weight: 800; font-family: monospace;">
              ${data.refId}
            </td>
          </tr>
        </table>
      </div>

      <!-- Scope Summary Card -->
      <div style="background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px; margin-bottom: 28px;">
        <div style="color: #2DD4BF; font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; font-weight: 700;">
          Inquiry Summary
        </div>
        <table width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 13px;">
          <tr>
            <td style="width: 35%; color: #9CA3AF;">Service:</td>
            <td style="color: #FFFFFF; font-weight: 600;">${data.service}</td>
          </tr>
          ${data.budget ? `
          <tr>
            <td style="color: #9CA3AF;">Budget Bracket:</td>
            <td style="color: #FBBF24; font-weight: 600;">${data.budget}</td>
          </tr>` : ''}
          ${data.company ? `
          <tr>
            <td style="color: #9CA3AF;">Company:</td>
            <td style="color: #FFFFFF;">${data.company}</td>
          </tr>` : ''}
          <tr>
            <td style="vertical-align: top; color: #9CA3AF; padding-top: 8px;">Scope Brief:</td>
            <td style="color: #D1D5DB; line-height: 1.5; padding-top: 8px;">
              <em>"${data.description.length > 250 ? data.description.substring(0, 250) + '...' : data.description}"</em>
            </td>
          </tr>
        </table>
      </div>

      <!-- What Happens Next -->
      <div style="margin-bottom: 28px;">
        <div style="color: #FFFFFF; font-size: 14px; font-weight: 700; margin-bottom: 14px; letter-spacing: -0.2px;">
          What Happens Next?
        </div>
        
        <table width="100%" cellpadding="8" cellspacing="0" border="0" style="font-size: 13px; line-height: 1.5;">
          <tr>
            <td style="width: 28px; vertical-align: top; color: #A855F7; font-weight: 900; font-family: monospace;">01</td>
            <td style="color: #D1D5DB;">
              <strong style="color: #FFFFFF;">Scope &amp; Feasibility Evaluation:</strong> We analyze your functional requirements, architecture needs, and integration touchpoints.
            </td>
          </tr>
          <tr>
            <td style="width: 28px; vertical-align: top; color: #2DD4BF; font-weight: 900; font-family: monospace;">02</td>
            <td style="color: #D1D5DB;">
              <strong style="color: #FFFFFF;">Personalized Direct Follow-up:</strong> Our founder or lead engineer will email you directly at <span style="color: #A855F7;">${data.email}</span> with specific architectural recommendations or initial questions.
            </td>
          </tr>
          <tr>
            <td style="width: 28px; vertical-align: top; color: #F59E0B; font-weight: 900; font-family: monospace;">03</td>
            <td style="color: #D1D5DB;">
              <strong style="color: #FFFFFF;">Milestone Proposal:</strong> If aligned, we provide a transparent, fixed-price milestone roadmap with 100% intellectual property ownership guaranteed.
            </td>
          </tr>
        </table>
      </div>

      <!-- Two-way reply reassurance banner -->
      <div style="background: rgba(45, 212, 191, 0.05); border: 1px dashed rgba(45, 212, 191, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: left;">
        <div style="color: #2DD4BF; font-size: 12px; font-weight: 700; margin-bottom: 4px;">
          💬 Have additional briefs, wireframes, or urgent timelines?
        </div>
        <div style="color: #9CA3AF; font-size: 12px; line-height: 1.5;">
          You can reply directly to this email at any time to reach our team, or connect immediately with our founder on WhatsApp at <a href="https://wa.me/923125355078" style="color: #2DD4BF; text-decoration: underline;">+92 312 5355078</a>.
        </div>
      </div>

      <!-- Signature -->
      <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 20px; color: #9CA3AF; font-size: 13px; line-height: 1.5;">
        Warm regards,<br>
        <strong style="color: #FFFFFF; font-size: 14px;">The Nutcrackers Team</strong><br>
        <span style="font-size: 11px; font-family: monospace; color: #6B7280;">Engineering Digital Excellence</span>
      </div>
    </div>

    ${BRAND_FOOTER}
  </div>
</body>
</html>
  `;

  const text = `
THANK YOU FOR REACHING OUT TO NUTCRACKERS
Reference ID: ${data.refId}
--------------------------------------------------

Dear ${data.name},

Thank you for reaching out to Nutcrackers! We have successfully received your project inquiry. Our technical directors and solutions architects are reviewing your requirements to provide a thoughtful approach tailored to your timeline and goals.

YOUR INQUIRY DETAILS:
- Reference ID: ${data.refId}
- Service: ${data.service}
- Budget: ${data.budget || 'Not Specified'}
- Company: ${data.company || 'Not Specified'}

WHAT HAPPENS NEXT:
1. Scope & Feasibility Evaluation: We analyze your functional requirements, architecture needs, and integration touchpoints.
2. Personalized Direct Follow-up: Our founder or lead engineer will email you directly at ${data.email} with recommendations.
3. Milestone Proposal: We provide a transparent, fixed-price milestone roadmap with 100% intellectual property ownership guaranteed.

NEED IMMEDIATE ASSISTANCE?
You can reply directly to this email with additional briefs, wireframes, or questions, or contact us directly on WhatsApp at +92 312 5355078.

Warm regards,
The Nutcrackers Team
Direct Email: alishan.cs01@gmail.com
WhatsApp: +92 312 5355078
Wah Cantt / Islamabad, Pakistan
  `.trim();

  return { subject, html, text };
}

// ============================================================================
// TEMPLATE 3: Administrator Reply to Client (From: Nutcrackers Admin)
// ============================================================================
export function generateAdminReplyEmail(data: AdminReplyPayload) {
  const subject = data.subject || `Re: Your Inquiry [Ref: ${data.refId}] — Nutcrackers`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050608; color: #F3F4F6; margin: 0; padding: 24px;">
  <div style="max-width: 620px; margin: 0 auto; background: #0D0E16; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
    
    ${BRAND_HEADER}

    <div style="padding: 36px 32px;">
      <!-- Reference Badge -->
      <div style="margin-bottom: 20px;">
        <span style="display: inline-block; padding: 5px 12px; background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.3); color: #C084FC; border-radius: 999px; font-size: 11px; font-family: monospace; font-weight: 700;">
          Inquiry Ref: ${data.refId}
        </span>
      </div>

      <!-- Personalized Greeting -->
      <h2 style="font-size: 18px; font-weight: 700; color: #FFFFFF; margin: 0 0 16px 0; letter-spacing: -0.3px;">
        Hi ${data.clientName},
      </h2>

      <!-- Administrator Personalized Message Body -->
      <div style="font-size: 14px; line-height: 1.7; color: #E5E7EB; margin-bottom: 28px; white-space: pre-wrap;">${data.messageBody}</div>

      <!-- Original Inquiry Reference Quote (if available) -->
      ${data.originalDescription ? `
      <div style="background: rgba(255,255,255,0.025); border-left: 3px solid #8B5CF6; border-radius: 0 12px 12px 0; padding: 14px 18px; margin-bottom: 28px;">
        <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #9CA3AF; margin-bottom: 4px;">
          Original Inquiry (${data.originalService || 'Nutcrackers Service'})
        </div>
        <div style="font-size: 12px; color: #9CA3AF; line-height: 1.5; font-style: italic;">
          "${data.originalDescription}"
        </div>
      </div>` : ''}

      <!-- Official Founder Signature Block -->
      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px; margin-top: 28px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="vertical-align: top; width: 48px; padding-right: 14px;">
              <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #8B5CF6, #2DD4BF); text-align: center; line-height: 48px; font-weight: 900; color: #FFFFFF; font-size: 18px;">
                AS
              </div>
            </td>
            <td style="vertical-align: middle;">
              <div style="color: #FFFFFF; font-size: 15px; font-weight: 700;">Ali Shan</div>
              <div style="color: #2DD4BF; font-size: 12px; font-weight: 600;">Founder &amp; CEO · Nutcrackers</div>
              <div style="color: #9CA3AF; font-size: 11px; font-family: monospace; margin-top: 2px;">
                Direct: <a href="mailto:alishan.cs01@gmail.com" style="color: #A855F7; text-decoration: none;">alishan.cs01@gmail.com</a> · WhatsApp: <a href="https://wa.me/923125355078" style="color: #2DD4BF; text-decoration: none;">+92 312 5355078</a>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Reply Instruction -->
      <div style="margin-top: 24px; padding: 12px 16px; background: rgba(255,255,255,0.02); border-radius: 10px; font-size: 11px; color: #6B7280; text-align: center; font-family: monospace;">
        To reply, simply respond directly to this email. Conversation continuity is preserved.
      </div>
    </div>

    ${BRAND_FOOTER}
  </div>
</body>
</html>
  `;

  const text = `
RE: YOUR INQUIRY [REF: ${data.refId}] — NUTCRACKERS
--------------------------------------------------

Hi ${data.clientName},

${data.messageBody}

${data.originalDescription ? `
ORIGINAL INQUIRY (${data.originalService || 'Service'}):
"${data.originalDescription}"
` : ''}

--------------------------------------------------
Warm regards,
Ali Shan
Founder & CEO | Nutcrackers — AI & Digital Solutions Agency
Direct Email: alishan.cs01@gmail.com
WhatsApp: +92 312 5355078
Islamabad / Wah Cantt, Pakistan
  `.trim();

  return { subject, html, text };
}
