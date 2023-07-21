
import CollapsibleTable from "../../../components/table/Table"
import styled from "./companyProjects.module.scss"

export const CompanyProjects = () => {

  return (
    <section className="projectsContainer">
      <h3>
        Projects  
      </h3>
      <CollapsibleTable/>
    </section>
  )
}
