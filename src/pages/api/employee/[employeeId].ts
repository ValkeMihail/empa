import { connectClient } from "@/utils/mongo"
import { EmployeeData, ProjectData } from "@types"
import { ObjectId } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req : NextApiRequest, res : NextApiResponse) => {

  const { employeeId } = req.query

  if (req.method !== 'GET') {
    return res.status(405).json({message: 'Method not allowed'})
  }

  const _employeeId = new ObjectId(employeeId as string)
  
  if (!employeeId) {
    return res.status(400).json({message: 'Employee id is required'})
  }
  try {

    const db = await connectClient()

    const employeesCol = db.collection<EmployeeData>('employees')
    const projectsCol = db.collection<ProjectData>('projects')
    

    const employee = await employeesCol.findOne({_id: _employeeId})  

    if (!employee) {
      return res.status(404).json({message: 'Employee not found'})
    }


    const projects = await projectsCol.find({ assigned: { $in: [_employeeId] } }).toArray()

    if (!projects) {
      return res.status(200).json({employee , projects: []})
    }

    const recentProjectTasks = projects[projects.length - 1].tasks

    if (!recentProjectTasks) {
      return res.status(200).json({employee , projects: [], recentProjectTasks: []})
    }

    return res.status(200).json({employee, projects , recentProjectTasks})

  } catch (error) {
    return res.status(500).json({message: 'Internal server error'})
  }
}

export default handler