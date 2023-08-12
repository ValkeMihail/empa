import { useRouter } from "next/router"
import { EmployeeData, TaskData } from "../../../types"
import { GroupAvatars } from "../groupAvatars/GroupAvatars"
import styles from  "./taskCard.module.scss"
import {ArrowRightAltOutlined} from "@mui/icons-material"


type TaskCardProps = {
  employeeList : EmployeeData[]
  task : TaskData
  departmentName : string
}


export const TaskCard = ({employeeList, task, departmentName} : TaskCardProps) => {

  const router = useRouter()
  const companyName = router.query.companyName as string

  return (
    <div className={styles.taskCard}>
      <div className={`${styles.taskHeader} flexColumn`}>
        <h4 className={styles.department}>
          {departmentName}
        </h4>
        <h3 className={styles.taskTitle}>
          {task.title}
        </h3>
        <p className={styles.taskDescription}>
          {task.extendedProps.description}
        </p>
      </div>
      <div className={`${styles.priorityAssigneesWrap} flexRow`}>
        <div className={"styles.avatarWrap flexRow"}>
          <GroupAvatars employeeList={employeeList}  />
          <h5>
            {task.extendedProps.priority}
          </h5>
        </div>
        <div 
          onClick={() => router.push(`/company/${companyName}/project/${task.extendedProps.projectId}/task/${task.id}`)}
          className={`${styles.actions} flexRow`}>
          <ArrowRightAltOutlined/>
        </div>
      </div>
        
    </div>
  )
}

  