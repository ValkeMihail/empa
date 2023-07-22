
import {  useState } from 'react';
import { EmployeeData, ProjectData, TaskData } from '../../../../../types';
import { CustomizedAccordion } from '@/components/accordion/Accordion';
import styles from '@/styles/company/employee.module.scss';
import { EmployeeHeader } from '@/containers/employeeContainers/employeeHeader/EmployeeHeader';
import employees from '../../../../../employees.json';
import projects from '../../../../../projects.json';



 const Employee = () => {
 
  const [employeeData, setData] = useState(employees[0] as EmployeeData);
  const [projectsData, setProjects] = useState(projects as ProjectData[]);
  const [tasks, setTasks] = useState(projects[0].tasks as TaskData[]);


  
  
    return (
      <div className={`${styles.empoyeeView} flexColumn`}>
        <EmployeeHeader
         employeeData={employeeData}
         recentProjectData={projectsData[0]}
         tasks={tasks}
        />
       <section className={`${styles.employeeContentSection} flexColumn`}>
       <CustomizedAccordion 
        projects={projectsData} 
        tasks={tasks} />
       </section>
      </div>
    );

}

export default Employee;