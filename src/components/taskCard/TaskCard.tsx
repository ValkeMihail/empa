import { EmployeeData } from "../../../types"
import { GroupAvatars } from "../groupAvatars/GroupAvatars"
import styles from  "./taskCard.module.scss"

type TaskCardProps = {
  employeeList : EmployeeData[]
}



export const TaskCard = ({employeeList} : TaskCardProps) => {

  return (
    <div className="taskCard">
      <div className="taskHeader flexColumn">
        <h4 className="department">
          UI Design
        </h4>
        <h3 className="taskTitle">
          Create a new logo
        </h3>
        <p className="taskDescription">
          Create a new logo for the company that will be used in the new website and in the new app.
        </p>
      </div>
        <div className="priorityAssigneesWrap flexRow">
          <GroupAvatars employeeList={employeeList}  
          />
            <h5>
              High
            </h5>
        </div>
        
        <div className="actions flexRow">

        </div>
      
    </div>
  )
}

  