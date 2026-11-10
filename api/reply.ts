import { handleAdminReplyRequest } from '../server/handlers/reply';

export default async function handler(req: any, res: any) {
  return handleAdminReplyRequest(req, res);
}
