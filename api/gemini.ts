import { handleGeminiRequest } from '../server/handlers/gemini';

export default async function handler(req: any, res: any) {
  return handleGeminiRequest(req, res);
}
