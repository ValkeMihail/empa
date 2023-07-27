import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {EmployeeData, CompanyData, DepartmentData} from '../../../types';
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
    projects: null,
    departments: [
      newDepartment._id
    ],
    employees: null
  }

  const newEmployee : EmployeeData = {
    _id: new ObjectId(),
    employeeName: userName,
    employeeEmail: email,
    employeeRole: 'Admin',
    employeePassword: hashedPassword,
    employeeStartDate: new Date().toISOString(),
    employeePhoto: null,
    employeeDepartmentId: newDepartment._id,
    employeeCompanyId: newCompany._id,
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

  await employeeCollection.insertOne(newEmployee);
  await companyCollection.insertOne(updatedCompany); 
  await departmentCollection.insertOne(updatedDepartment);




  const token = jwt.sign({ 
    companyName,
    email,
    password: hashedPassword,
    userName,
  }, 'your-secret-key', {
    expiresIn: '1h',
  });

  return res.status(201).json({ token });
}
