// import { Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const mockUsers = [];

// export default async function handler(req: Request, res: Response) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { username, email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = {
//     id: mockUsers.length + 1,
//     username,
//     email,
//     password: hashedPassword,
//   };

//   mockUsers.push(newUser);

//   const token = jwt.sign({ userId: newUser.id, username }, 'your-secret-key', {
//     expiresIn: '1h',
//   });

//   return res.status(201).json({ token });
// }
