import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { setCookie } from 'nookies';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectClient } from '@/utils/mongo';
import {  TokenData, User } from '@types';


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  
  const { email, password } = req.body;

  try {
    
    const db = await connectClient();
    const usersCol = db.collection<User>('users');
    const user = await usersCol.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }   
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return res.status(401).json({ message: 'Password incorrect' });
    }
    const tokenData : TokenData = {
      id: user.employeeId,
      email: user.email,
      accesLevel : user.accesLevel,
      companyId: user.companyId,
    }
    const token = jwt.sign(tokenData, 'your-secret-key', {
      expiresIn: '20h',
    });


    setCookie({ res }, 'token', token, {
      httpOnly: true,
      maxAge: 10000,
      path: '/',
      sameSite: 'strict'
    });
    
    return res.status(200).json({ message: 'Login successful' });
    
  } catch (error) {
    
    console.error('Failed to connect to the database ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
