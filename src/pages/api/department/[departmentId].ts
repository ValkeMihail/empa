import { connectClient } from "@/utils/mongo";
import { DepartmentData, EmployeeData } from "@types";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

async function handler (req : NextApiRequest , res : NextApiResponse) {
  
  const { departmentId } = req.query

  if (req.method !== 'GET') {
    return res.status(405).json({message: 'Method not allowed'})
  }

  if (!departmentId) {
    return res.status(400).json({message: 'Department id is required'})
  }

  const _id = new ObjectId(departmentId as string)

  try {
    const db = await connectClient();
    const employeesCol = db.collection<EmployeeData>('employees')
    const employees = await employeesCol.find({employeeDepartmentId: _id}).toArray()
    const department = await db.collection<DepartmentData>('departments').findOne({_id: _id})
    if (!department) {
      return res.status(404).json({message: 'Department not found'})
    }
    if (!employees) {
      return res.status(404).json({message: 'Employees not found'})
    }
    return res.status(200).json({department, employees})
  } catch (error) {

    return res.status(500).json({message: 'Internal server error'})
  }
}
export default handler