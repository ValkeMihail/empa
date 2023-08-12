import { connectClient } from "@/utils/mongo"
import { ProjectData } from "@types"
import { ObjectId } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'GET') {

    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { taskId , projectId } = req.query
  const _projectId = new ObjectId(projectId as string)
  const _taskId = new ObjectId(taskId as string)

  try {

    const db = await connectClient()
    const projectsCol = db.collection<ProjectData>('projects')
    const project = await projectsCol.findOne({ _id: _projectId })

    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }

    const task = project.tasks.find(task => task.id.toString() === _taskId.toString());
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    return res.status(200).json({task, project})
    
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}


export default handler