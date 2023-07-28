

import styles from  "@/styles/company/company.module.scss";
import { CompanyHeader } from "@/containers/companyContainers/companyHeader/CompanyHeader";
import { CompanyDepartments } from "@/containers/companyContainers/companyDepartments/CompanyDepartments";
import { CompanyProjects } from "@/containers/companyContainers/companyProjects/CompanyProjects";
import { DepartmentData , CompanyData } from "@types";
import { useEffect , useState} from "react";
import { fetchCompanyData } from "@/utils/client-api";

  const Company = () => {
  
    const [companyData , setCompanyData] = useState<CompanyData | null>(null)

    useEffect (() => {
      const fetchData = async () => {
        const fetchedCompanyData = await fetchCompanyData();
        if (!fetchedCompanyData){
          return
        }else{
          setCompanyData(fetchedCompanyData as CompanyData)
        }
        
      }
      fetchData()
    }, [])



  return (
    <>
      <CompanyHeader
        nrOfDepartments={companyData!?.departments!?.length || 0}
        nrOfProjects={companyData!?.projects!?.length || 0}
        nrOfEmployees={companyData!?.employees!?.length || 0}
      />
      <main className={`${styles.mainContainer} flexColumn`}>  
        <CompanyDepartments
          departments={[] as DepartmentData[]}
        />
        <CompanyProjects/>        
      </main>
    </>
  );
}

export default Company;