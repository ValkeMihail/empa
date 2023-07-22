import { EmployeeData, ProjectData, TaskData } from "../../../../types";
import { EmployeeRightSection } from "../employeeRightSection/EmployeeRigthSection";
import { EmployeeLeftSection } from "../employeeLeftSection/EmployeeLeftSection";
import styles from './employeeheader.module.scss';




type EmployeeHeaderProps = {
  employeeData: EmployeeData;
  tasks: TaskData[];
  recentProjectData: ProjectData;
};


export const EmployeeHeader = ({employeeData ,recentProjectData, tasks } : EmployeeHeaderProps ) => {


  return(
    <section className={`${styles.employeeHeader} flexColumn`}>
    {   (
        <div className= {`${styles.employeeHeader} flexRow`}>
          <EmployeeLeftSection 
            employeeData={employeeData}
            />            
          <EmployeeRightSection
            recentProject={recentProjectData}
            tasks={tasks}
            />
        </div>
    )}
    </section>

    
  );

}
