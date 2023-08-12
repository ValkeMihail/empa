
import { ProjectData } from "@types";
import ProjectsTable from "../../../components/table/Table"
import styles from "./companyProjects.module.scss"


type CompanyProjectsProps = {
  projects: ProjectData[];
}


export const CompanyProjects = ({projects} : CompanyProjectsProps) => {

  return (
    <section className={styles.projectsContainer}>
      <h3>
        Projects  
      </h3>
      <ProjectsTable
        projects={projects}
      />
    </section>
  )
}
