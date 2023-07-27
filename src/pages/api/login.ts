import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectClient } from '@/utils/mongo';


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { email, password } = req.body;

  try {
    
    const db = await connectClient();
    const employeesCol = db.collection('employees');
    const employee = await employeesCol.findOne({ employeeEmail: email });

    if (!employee) {
      return res.status(401).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, employee.employeePassword);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password incorrect' });
    }

    const token = jwt.sign({ employeeId: employee._id, employeeEmail: employee.email }, 'your-secret-key', {
      expiresIn: '1h',
    });


    const companyObjectId = employee.employeeCompanyId;
    const companiesCol = db.collection('companies');
    const companyData = await companiesCol.findOne({ _id: companyObjectId });
    
    if (!companyData) {
      return res.status(404).json({ message: 'Company not found' });
    }

    return res.status(200).json({ token , companyData });
    
  } catch (error) {
    
    console.error('Failed to connect to the database ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
