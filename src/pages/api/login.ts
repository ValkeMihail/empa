import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectClient } from '@/utils/mongo';
import { EmployeeData, TokenData } from '@types';


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { email, password } = req.body;

  try {
    
    const db = await connectClient();
    const employeesCol = db.collection<EmployeeData>('employees');
    const employee = await employeesCol.findOne({ employeeEmail: email });

    if (!employee) {
      return res.status(401).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, employee.employeePassword);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password incorrect' });
    }
    const tokenData : TokenData = {
      id: employee._id,
      email: employee.employeeName,
      userName: employee.employeeName,
      accesLevel : employee.employeeAccesLevel,
      companyId: employee.employeeCompanyId,
    }
    const token = jwt.sign(tokenData, 'your-secret-key', {
      expiresIn: '2h',
    });

    return res.status(200).json({ token });
    
  } catch (error) {
    
    console.error('Failed to connect to the database ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
