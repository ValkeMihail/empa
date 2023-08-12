
import { EmployeeData, ProjectData, TaskData } from '@types';
import { CustomizedAccordion } from '@/components/accordion/Accordion';
import styles from '@/styles/company/employee.module.scss';
import { EmployeeHeader } from '@/containers/employeeContainers/employeeHeader/EmployeeHeader';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { employeeId } = context.query
  
  try {
    const response = await fetch(`http://localhost:3000/api/employee/${employeeId}`);
    if (response.ok) {
      const data = await response.json()
      return {
        props: {
          employee: data.employee,
          projects: data.projects,
          recentProjectTasks: data.recentProjectTasks,
        },
      };
    } else {
      console.error('Error fetching company data:', response.status, response.statusText);
      return {
        props: {
          employee: null,
          projects: null,
          recentProjectTasks: null,
        },
      };
    }
  }
  catch (error) {
    console.error('Error fetching company data:', error);
    return {
      props: {
        employee: null,
        projects: null,
        recentProjectTasks: null,
      },
    };
  }
}


type EmployeeProps = {
  employee: EmployeeData
  projects : ProjectData[]
  recentProjectTasks : TaskData[]
}



const Employee = ({employee, projects, recentProjectTasks }:  EmployeeProps) => {



  // return (
  //   <>
  //     {JSON.stringify(employee)}
  //     {JSON.stringify(projects)}
  //     {JSON.stringify(recentProjectTasks)}
  //   </>
  // )

  
    return (
      <div className={`${styles.empoyeeView} flexColumn`}>
      <EmployeeHeader
        employeeData={employee}
        recentProjectData={projects[0]}
        tasks={recentProjectTasks}
      />
      <section className={`${styles.employeeContentSection} flexColumn`}>
      <CustomizedAccordion 
      projects={projects} 
      tasks={recentProjectTasks} />
      </section>
      </div>
    );

}

export default Employee;