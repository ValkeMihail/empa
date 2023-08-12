import { NextApiRequest, NextApiResponse } from 'next';
import { connectClient } from '@/utils/mongo';
import { CompanyData, DepartmentData, ProjectData, TokenData } from '../../../types';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  
  const { token } = req.cookies; 
  let companyId : ObjectId;

  if ( req.method !== 'GET' ) {
    return res.status(405).json({ message: 'Method not allowed' });
  }


  if (!token) {
  
    return res.status(401).json({ message: 'Not Authorized' });
  
  }else {
  
    const decodedToken = jwt.decode(token);
    if (!decodedToken) {
      return res.status(401).json({ message: 'Not Authorized' });
    }
    const tokenData = decodedToken as TokenData;
    companyId = new ObjectId(tokenData.companyId);
    
    if (!companyId) {
      return res.status(401).json({ message: 'Not Authorized' });
    }
  }
  try {
    const db = await connectClient();
    const companiesCol = db.collection<CompanyData>('companies');
    const departmentsCol = db.collection<DepartmentData>('departments');
    const projectsCol = db.collection<ProjectData>('projects');

    const company = await companiesCol.findOne({ _id: companyId  });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

      
    const getDepartments = Promise.all(company.departments.map(async (department) => {
      const departmentData = await departmentsCol.findOne({ _id: department });
      if (!departmentData) {
        return null;
      }else {
        return departmentData;
      }
    }));


    const departments = await getDepartments;
  

    if (!company.projects) {
      return res.status(200).json({ company, departments, projects : [] });
    }

    const getProjects = Promise.all(company.projects.map(async (project) => {
      const projectData = await projectsCol.findOne({ _id: project });
      if (!projectData) {
        return null;
      }else {
        return projectData;
      }
    }));

    const projects = await getProjects;

    return res.status(200).json({ company, departments, projects });

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
