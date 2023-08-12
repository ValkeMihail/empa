

import styles from  "@/styles/company/company.module.scss";
import { CompanyHeader } from "@/containers/companyContainers/companyHeader/CompanyHeader";
import { CompanyDepartments } from "@/containers/companyContainers/companyDepartments/CompanyDepartments";
import { CompanyProjects } from "@/containers/companyContainers/companyProjects/CompanyProjects";
import { DepartmentData , CompanyData, ProjectData } from "@types";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import CompanyLayout from "@/components/companyLayout/CompanyLayout";



export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { token } = parseCookies(context);
    const headers = {
      Cookie: `token=${token}`, 
    };

    const response = await fetch('http://localhost:3000/api/company', { headers });
    if (response.ok) {
      const data = await response.json()
      return {
        props: {
          companyData: data.company,
          departments: data.departments,
          projects: data.projects,
        },
      };
    } else {
      console.error('Error fetching company data:', response.status, response.statusText);
      return {
        props: {
          companyData: null,
          departments: null,
          projects: null,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching company data:', error);
    return {
      props: {
        companyData: null,
        departments: null,
        projects: null,
      },
    };
  }
};


  type CompanyProps = {
    companyData: CompanyData;
    departments: DepartmentData[];
    projects: ProjectData[];
  };

  
  const Company = ({companyData , departments, projects} : CompanyProps) => {
  
  return (
    <CompanyLayout>
      <CompanyHeader
        nrOfDepartments={companyData?.departments?.length || 0}
        nrOfProjects={companyData?.projects?.length || 0}
        nrOfEmployees={companyData?.employees?.length || 0}
      />
      <main className={`${styles.mainContainer} flexColumn`}>  
        <CompanyDepartments
          departments={departments}
        />
        <CompanyProjects
          projects={projects}
        />        
      </main>
    </CompanyLayout>
  );
}

export default Company;