
import CollapsibleTable from "../../../components/table/Table"
import styles from "./companyProjects.module.scss"

export const CompanyProjects = () => {

  return (
    <section className={styles.projectsContainer}>
      <h3>
        Projects  
      </h3>
      <CollapsibleTable/>
    </section>
  )
}
