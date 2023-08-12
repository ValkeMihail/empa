import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { setCookie } from 'nookies';
import {EmployeeData, CompanyData, DepartmentData, TokenData, User} from '../../../types';
import { connectClient } from '@/utils/mongo';
import { ObjectId } from 'mongodb';

export default async function createCompany(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userName ,companyName, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);



  const db = await connectClient();
  const usersCol = db.collection<User>('users');
  const employeeCollection = db.collection<EmployeeData>('employees');
  const companyCollection = db.collection<CompanyData>('companies');
  const departmentCollection = db.collection<DepartmentData>('departments');

  const newDepartment : DepartmentData = {
    _id: new ObjectId(),
    departmentName: 'Management',
    departmentEmployees: [],
    departmentDescription: null,
    departmentPhoto: null
  }



  const newCompany : CompanyData = {
    _id: new ObjectId() ,
    companyName: companyName,
    companyEmail: email,
    companyPhone: null,
    companyAddress: null,
    companyWebsite: null,
    companyLogo: null,
    projects: [],
    departments: [
      newDepartment._id
    ],
    employees: []
  }

  const newEmployee : EmployeeData = {
    _id: new ObjectId(),
    employeeName: userName,
    employeeEmail: email,
    employeeRole: 'Admin',
    employeeStartDate: new Date().toISOString(),
    employeePhoto: null,
    employeeDepartmentId: newDepartment._id,
    employeePerformance: null,
    employeeAttributes: null
  }
  const updatedDepartment : DepartmentData = {
    ...newDepartment,
    departmentEmployees: [newEmployee._id]
  }
  const updatedCompany : CompanyData = {
    ...newCompany,
    employees: [newEmployee._id]
  }

  const newUser : User = {
    employeeId: new ObjectId(),
    email: email,
    password: hashedPassword,
    accesLevel: 'Admin',
    companyId: newCompany._id
  }


  await usersCol.insertOne(newUser);
  await employeeCollection.insertOne(newEmployee);
  await companyCollection.insertOne(updatedCompany); 
  await departmentCollection.insertOne(updatedDepartment);


  const tokenData : TokenData = {
    id: newUser.employeeId,
    email: newUser.email,
    accesLevel : newUser.accesLevel,
    companyId: newUser.companyId
  }

  const token = jwt.sign(tokenData, 'your-secret-key', {
    expiresIn: '2h',
  });
  try {
    setCookie({ res }, 'token', token, {
      httpOnly: true,
      maxAge: 10000,
      path: '/',
      sameSite: 'strict'
    });
  } catch (error) {
    console.error('Failed to connect to the database ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

  return res.status(200).json({ message: 'User created' });

}
