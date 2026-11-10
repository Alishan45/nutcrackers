import { handleContactRequest } from '../server/handlers/contact';

export default async function handler(req: any, res: any) {
  return handleContactRequest(req, res);
}
