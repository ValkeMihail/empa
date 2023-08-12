import CompanyLayout from "@/components/companyLayout/CompanyLayout"
import StickyHeadTable from "@/containers/dashboardContainers/employeesTable"
import styles from '@/styles/company/dashboard.module.scss'
import { Input } from "@mui/material"

const Dashboard = () => {
  return (
    <CompanyLayout>
      <div className={styles.dashboardContainer}>
        <h1 style={{ textAlign: "left" }}>
          Dashboard
        </h1>
        <section className={styles.dashboardSection}>
          <h2 className={styles.title}>
            Company
          </h2>
          <Input
            placeholder="Company Name"
            fullWidth
          />
          <Input
            placeholder="Company Address"
            fullWidth
          />
          <Input
            placeholder="Company Phone"
            fullWidth
          />
          <Input
            placeholder="Company Email"
            fullWidth
          />


        </section>
        <section className={styles.dashboardSection}>
          <h2 className={styles.title}>
            Employees
          </h2>
          <StickyHeadTable/>
        </section>
        <section className={styles.dashboardSection}>
          <h2 className={styles.title}>
            Departments
          </h2>
          <StickyHeadTable/>
        </section>
      </div>
    </CompanyLayout>
  )
}

export default Dashboard
