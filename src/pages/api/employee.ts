import { connectClient } from "@/utils/mongo";
import { NextApiRequest , NextApiResponse } from "next";


export default async function employeeHandler(req: NextApiRequest , res: NextApiResponse) {

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const db = await connectClient();
  const employeeCollection = db.collection('employees');

  const { employeeId } = req.body;

  const employee = await employeeCollection.findOne({employeeId});

  if (!employee) {
    return res.status(404).json({message: 'Employee not found'})
  }

  return res.status(200).json({employee})
}