import { connectClient } from "@/utils/mongo";
import { ProjectData } from "@types";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next"

const handler  = async( req : NextApiRequest , res  : NextApiResponse) => {

  const { projectId } = req.query as { projectId: string };

  const projIdObj = new ObjectId(projectId as string);


  if (req.method !== 'GET') {
    return res.status(405).json({message: 'Method not allowed'})
  }

  try {
  
    const db = await connectClient();
    const project = await db.collection<ProjectData>('projects').findOne({_id : projIdObj})

    if (!project) {
      return res.status(404).json({message: 'Project not found'})
    }
    const employeesCol = db.collection('employees')
    
    const arrayOfEmployeeIds = project.assigned.map((id) => new ObjectId(id))

    const employees = await employeesCol.find({_id: {$in: arrayOfEmployeeIds}}).toArray()
    
    
    if (!employees) {
      return res.status(404).json({message: 'Employees not found'})
    }

    const departmentIds = employees.map((employee) => employee.employeeDepartmentId) 
    
    const uniqueDepartmentIds = departmentIds.filter((id, index) => departmentIds.indexOf(id) === index)

    const departmentsCol = db.collection('departments')

    const departments = await departmentsCol.find({_id: {$in: uniqueDepartmentIds}}).toArray()
    
    if (!departments) {
      return res.status(404).json({message: 'Departments not found'})
    }



    return res.status(200).json({project , employees, departments})


  } catch (error) {
    return res.status(500).json({message: 'Internal server error'})
  }



} 






export default handler