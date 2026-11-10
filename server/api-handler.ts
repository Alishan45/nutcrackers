import { app } from './app';

export default function handler(req: any, res: any) {
  // Normalize req.url so that Express router (/api/...) always matches
  if (req.url && !req.url.startsWith('/api')) {
    req.url = '/api' + req.url;
  }
  return app(req, res);
}

