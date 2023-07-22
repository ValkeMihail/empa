import { ChartComponent } from "@/components/charts/LineChart";
import CollapsibleTable from "@/components/table/Table";
import styles from "@/styles/company/department.module.scss";
import { useRouter } from "next/router";





const Department = () => {

  const departmentId = useRouter().query.departmentId;

  return (
    <div className={`${styles.departmentContainer} flexColumn`}>
      <header className={`${styles.departmentHeader} flexRow`}>
        <div className={`${styles.departmentDescription} flexColumn`}>
          <h1>Mobile Development</h1>
          <p>
            The mobile development department is responsible for the development of the mobile
            applications for the company. It is a department that is growing rapidly and is
            looking for new employees to join the team.
          </p>
          <div className={`${styles.departmentHeaderInfo} flexRow`}>
            <div className={`${styles.managerWrap} flexRow`}>
              <img
                className={styles.managerPhoto}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="manager photo"
              />
              <div className={`${styles.managerTitleWrap} flexColumn`}>
                <h5>John Doe</h5>
                <h6>Manager</h6>
              </div>
            </div>
            <h5>
              Department ID: <span>{departmentId}</span>
            </h5>
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
            ]}
          />
          {/* some form of chart that will contain employees stats */}
        </div>
      </header>
      <main className={`${styles.departmentMainContainer} flexColumn`}>
        <h2>Department Members</h2>
        <CollapsibleTable />
        {/* table component from mui containing the employees */}
      </main>
    </div>
  );
};

export default Department;
