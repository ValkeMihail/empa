import { ChartComponent } from "@/components/charts/LineChart";
import { EmployeesTable } from "@/components/table/Table";
import styles from "@/styles/company/department.module.scss";
import { DepartmentData, EmployeeData } from "@types";
import { GetServerSideProps } from "next";
import Image from "next/image";



export const getServerSideProps: GetServerSideProps = async (context) => {

  const { departmentId } = context.query;

  try {
    
    const response = await fetch(`http://localhost:3000/api/department/${departmentId}/`);
    if (response.ok) {
      const data = await response.json()
      return {
        props: {
          department: data.department,
          employees : data.employees
        },
      };
    } else {
      console.error('Error fetching company data:', response.status, response.statusText);
      return {
        props: {
          department: null,
          employees : null
        },
      };
    }
  } catch (error) {
    console.error('Error fetching company data:', error);
    return {
      props: {
        department: null,
        employees : null
      },
    };
  }
};





type DepartmentProps = {
  department: DepartmentData;
  employees : EmployeeData [];
};

const Department = ({department , employees} : DepartmentProps ) => {


  return (
    <div className={`${styles.departmentContainer} flexColumn`}>
      <header className={`${styles.departmentHeader} flexRow`}>
        <div className={`${styles.departmentDescription} flexColumn`}>
          <h1>{department.departmentName}</h1>
          <p>
            {department.departmentDescription}
          </p>
          <div className={`${styles.departmentHeaderInfo} flexRow`}>
            <div className={`${styles.managerWrap} flexRow`}>
              <Image
                width={50}
                height={50}
                className={styles.managerPhoto}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="manager photo"
              />
              <div className={`${styles.managerTitleWrap} flexColumn`}>
                <h5>{employees[0].employeeName}</h5>
                <h6>{employees[0].employeeRole}</h6>
              </div>
            </div>
            <h6>
              Department ID: <span>{department._id.toString()}</span>
            </h6>
          </div>
        </div>
        <div className={`${styles.departmentChart} flexRow`}>
          <ChartComponent
            employeePerformance={[
              { month: "Jan", performance: 65 },
              { month: "Feb", performance: 59 },
              { month: "Mar", performance: 80 },
              { month: "Apr", performance: 81 },
              { month: "May", performance: 56 },
              { month: "Jun", performance: 55 },
              { month: "Jul", performance: 40 },
              { month: "Aug", performance: 65 },
              { month: "Sep", performance: 59 },
              { month: "Oct", performance: 80 },
              { month: "Nov", performance: 81 },
              { month: "Dec", performance: 56 },
            ]}
          />
        
        </div>
      </header>
      <main className={`${styles.departmentMainContainer} flexColumn`}>
        <h2>Department Members</h2>
        <EmployeesTable
          
          employees={employees}
        />
      </main>
    </div>
  );
};

export default Department;
