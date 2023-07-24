import { Request, Response } from 'express';

export default function logout(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  return res.status(200).json({ message: 'Logged out successfully' });
}
