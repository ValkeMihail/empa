import { ObjectId } from "mongodb";

export type DepartmentData = {
  _id: ObjectId;
  departmentName: string;
  departmentDescription: string | null;
  departmentPhoto: string | null;
  departmentEmployees: ObjectId[]; 
}


export type EmployeeData = {
  _id: ObjectId;
  employeeCompanyId: ObjectId;
  employeeName: string;
  employeeEmail: string;
  employeePassword: string;
  employeeRole: string;
  employeeStartDate: string;
  employeePhoto: string  | null;
  employeeDepartmentId: ObjectId | null;
  employeePerformance: { month: string; performance: number }[] | null;
  employeeAttributes: { attribute: string; value: number }[] | null;
};



export type CompanyData =  {
  _id: ObjectId;
  companyName: string;
  companyEmail: string;
  companyPhone: string | null;
  companyAddress: string | null;
  companyWebsite: string | null;
  companyLogo: string | null;
  projects: string[] | null;
  departments: ObjectId[] | null;
  employees: ObjectId[] | null;
}
export type TaskData = {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  groupId: string;
  url: string;
  interactive: boolean;
  extendedProps: {
    employeeId: string;
    projectId: string;
    description: string;
    status: string;
    priority: string;
    progress: number;
  };
};

export type ProjectData = {
  _id: string;
  projectName: string;
  projectDescription: string;
  projectStartDate: string; // You can replace "string" with a more specific date type like "Date" if needed.
  projectEndDate: string; // You can replace "string" with a more specific date type like "Date" if needed.
  projectStatus: string;
  projectCompletion: number;
  projectPhoto: string;
  tasks: TaskData[];
  assigned: string[];
};


export type FullCompanyData = {
  _id: ObjectId;
  companyName: string;
  companyEmail: string;
  companyPhone: string | null;
  companyAddress: string | null;
  companyWebsite: string | null;
  companyLogo: string | null;
  
  projects: ProjectData[];
  departments: DepartmentData[];
  employees: EmployeeData[];
}
