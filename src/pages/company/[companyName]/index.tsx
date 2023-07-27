

import styles from  "@/styles/company/company.module.scss";
import { CompanyHeader } from "@/containers/companyContainers/companyHeader/CompanyHeader";
import { CompanyDepartments } from "@/containers/companyContainers/companyDepartments/CompanyDepartments";
import { CompanyProjects } from "@/containers/companyContainers/companyProjects/CompanyProjects";
import { useSelector } from 'react-redux';
import { RootState } from "@/store";



  const Company = () => {
    
  const companyData = useSelector((state : RootState) => state.company.data);
  console.log(companyData);
    
  return (
    <>
      <CompanyHeader 
        nrOfDepartments={companyData!?.departments!?.length}
        nrOfProjects={companyData!?.projects!?.length}
        nrOfEmployees={companyData!?.employees!?.length}
      />
      <main className={`${styles.mainContainer} flexColumn`}>
        <div>
          {companyData?.companyEmail}
        </div>
        
        
        {/* <CompanyDepartments
          departments={companyData.departments}
        /> */}
        <CompanyProjects/>
        
      </main>
    </>
  );
}


export default Company;