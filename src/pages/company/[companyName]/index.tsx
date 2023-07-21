

import styles from  "@styles/company/company.module.scss";
import { useRouter } from "next/router";

// import { useEffect, useState } from "react";
// import { fetchCompany, fetchDepartments } from "../../client-api";
// import { CompanyData, DepartmentData } from "../../../types";




 const Company = () => {
   
   const router = useRouter();
   const { companyName } = router.query;
  // const [companyData, setCompanyData] = useState({} as CompanyData);
  // const [departments, setDepartments] = useState([] as DepartmentData[]);

  
  // useEffect (() => {
  //   const fetchData = async () => {
  //     const company : CompanyData = await fetchCompany();
  //     setCompanyData(company);
  //     const departments : DepartmentData[] = await fetchDepartments();
  //     setDepartments(departments);  
  //     departments.map (department => {
  //       console.log(department.departmentPhoto);
  //       console.log(department.departmentName);
  //     })

  //   }
  //   fetchData();
  // }, []);


  return (
    
    
    <>
    welcome to  {
      companyName
    }
      {/* {
        companyData &&
          (
          <>
            <CompanyHeader 
              nrOfDepartments={companyData!?.departments!?.length}
              nrOfProjects={companyData!?.projects!?.length}
              nrOfEmployees={companyData!?.employees!?.length}
            />
            <main className="flexColumn mainContainer">
              <CompanyDepartments
                departments={departments!}
              />
              <CompanyProjects/>
            </main>
          </>
          )
        } */}
    </>
  )
}



export default Company;