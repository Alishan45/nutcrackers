import { GoogleGenAI } from '@google/genai';

interface GeminiRequestBody {
  prompt: string;
  context?: string;
  service?: string;
  type?: 'chat' | 'suggestion' | 'automation' | 'analytics';
}

const SYSTEM_INSTRUCTION = `You are the Senior AI Solution Architect at Nutcrackers, an elite AI & Digital Solutions Agency. 
Nutcrackers delivers 7 core services:
1. Video Editing (Commercial cuts, YouTube retention, motion graphics)
2. Digital Marketing (Algorithmic Meta/Google ads, programmatic SEO, funnel CRO)
3. Mobile App & Web Development (Next.js, React, React Native, Supabase, APIs, SaaS)
4. AI Website Agent (Autonomous RAG customer concierges, lead qualification)
5. AI Automation (n8n, Make, self-healing webhook workflows, document OCR)
6. Data Science (Predictive ML, XGBoost churn models, classification pipelines)
7. Data Analysis (Interactive executive BI dashboards, SQL warehousing, retention heatmaps)

Your tone is professional, technically sophisticated, concise, and helpful. 
Provide practical, architectural insights on how Nutcrackers can engineer the client's idea.
Keep answers structured and punchy (1 to 3 short paragraphs). Never hallucinate fake pricing. Direct them to book a milestone project.`;

export async function handleGeminiRequest(req: any, res: any) {
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

  const { prompt, context, service, type = 'chat' }: GeminiRequestBody = req.body || {};

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'A valid text prompt is required.' });
  }

  // Sanitize prompt length to prevent token abuse
  const sanitizedPrompt = prompt.trim().slice(0, 1000);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ 
      error: 'GEMINI_API_KEY is not configured on the server.',
      fallback: 'Nutcrackers AI is currently operating in offline mode. Please contact us directly via WhatsApp at +92 312 5355078.'
    });
  }

  const ai = new GoogleGenAI({ apiKey });

  // Priority cascade of supported models
  const modelsToTry = ['gemini-3.5-flash-lite', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];

  let finalResponse = '';
  let modelUsed = '';
  let lastError = null;

  for (const model of modelsToTry) {
    try {
      const interaction = await ai.interactions.create({
        model,
        input: `[Context: ${context || 'General inquiry'} | Service: ${service || 'Full-Stack Digital'}] ${sanitizedPrompt}`,
        system_instruction: SYSTEM_INSTRUCTION,
      });

      if (interaction?.output_text) {
        finalResponse = interaction.output_text;
        modelUsed = model;
        break;
      }
    } catch (err: any) {
      lastError = err;
      // Try models.generateContent fallback if interactions.create encountered version mismatch
      try {
        const genResp = await ai.models.generateContent({
          model,
          contents: sanitizedPrompt,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION
          }
        });
        if (genResp?.text) {
          finalResponse = genResp.text;
          modelUsed = model;
          break;
        }
      } catch (innerErr: any) {
        lastError = innerErr;
      }
    }
  }

  if (!finalResponse) {
    console.error('Gemini invocation error across all models:', lastError?.message || lastError);
    return res.status(503).json({
      error: 'AI service temporarily unavailable. Spikes in demand are temporary.',
      fallback: 'Thanks for reaching out! Nutcrackers engineers custom AI agents, automated operations, and full-stack platforms. Send us a message on WhatsApp (+92 312 5355078) to discuss your project scope directly!'
    });
  }

  return res.status(200).json({
    success: true,
    response: finalResponse,
    model: modelUsed,
    timestamp: new Date().toISOString()
  });
}
