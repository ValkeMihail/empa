

import styles from  "@/styles/company/company.module.scss";
import { useRouter } from "next/router";
import company from "../../../../company.json";
import companyDepartments from "../../../../departments.json";
import {  useState } from "react";
import { CompanyData, DepartmentData } from "../../../../types"   
import { CompanyHeader } from "@/containers/companyContainers/companyHeader/CompanyHeader";
import { CompanyDepartments } from "@/containers/companyContainers/companyDepartments/CompanyDepartments";
import { CompanyProjects } from "@/containers/companyContainers/companyProjects/CompanyProjects";




 const Company = () => {
   
   const router = useRouter();
   const { companyName } = router.query;

    const [companyData, setCompanyData] = useState(company as CompanyData);
    const [departments, setDepartments] = useState(companyDepartments as DepartmentData[]);

  


  return (
    
    
    <>
      {
        companyData &&
          (
            <>
              <CompanyHeader 
                nrOfDepartments={companyData.departments.length}
                nrOfProjects={companyData.projects.length}
                nrOfEmployees={companyData.employees.length}
              />
              <main className={`${styles.mainContainer} flexColumn`}>
                <CompanyDepartments
                  departments={departments}
                />
                <CompanyProjects/>
              </main>
            </>
          )
      }
    </>
  )
}



export default Company;