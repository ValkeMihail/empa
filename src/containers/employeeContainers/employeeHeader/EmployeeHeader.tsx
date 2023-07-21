import { EmployeeData, ProjectData, WorkTask } from "../../../../types";
import { EmployeeRigthSection } from "../employeeRightSection/EmployeeRigthSection";
import { EmployeeLeftSection } from "../employeeLeftSection/EmployeeLeftSection";


import './employeeheader.css';


type EmployeeHeaderProps = {
  employeeData: EmployeeData;
  tasks: WorkTask[];
  recentProjectData: ProjectData;
};


export const EmployeeHeader = ({employeeData ,recentProjectData, tasks } : EmployeeHeaderProps ) => {


  return(
    <section className='flexColumn employeeHeaderSection'>
    {   (
        <div className="flexRow employeeHeader">
          <EmployeeLeftSection 
            employeeData={employeeData}
            />            
          <EmployeeRigthSection
            recentProject={recentProjectData}
            tasks={tasks}
            />
        </div>
    )}
    </section>

    
  );

}
