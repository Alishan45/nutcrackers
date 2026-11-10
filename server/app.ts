import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleContactRequest } from './handlers/contact';
import { handleAdminReplyRequest } from './handlers/reply';
import { handleGeminiRequest } from './handlers/gemini';

dotenv.config();

export const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Nutcrackers Agency Backend',
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    smtpConfigured: !!process.env.SMTP_APP_PASSWORD,
    time: new Date().toISOString()
  });
});

// API Routes
app.post('/api/contact', handleContactRequest);
app.post('/api/reply', handleAdminReplyRequest);
app.post('/api/gemini', handleGeminiRequest);

export default app;
