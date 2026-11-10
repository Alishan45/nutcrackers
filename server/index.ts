import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleContactRequest } from './handlers/contact';
import { handleAdminReplyRequest } from './handlers/reply';
import { handleGeminiRequest } from './handlers/gemini';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

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

// Serve frontend static files from dist/ if built
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routes (Express 5 compatible)
app.use((req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(404).send('Nutcrackers Agency API Server is running.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Nutcrackers Backend Server listening on http://localhost:${PORT}`);
  console.log(`🤖 Gemini API: ${process.env.GEMINI_API_KEY ? 'Configured' : 'Missing Key'}`);
  console.log(`📧 Gmail SMTP: ${process.env.SMTP_APP_PASSWORD ? 'Configured (' + process.env.SMTP_USER + ')' : 'Missing Password'}`);
});
