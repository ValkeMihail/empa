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
  employeeName: string;
  employeeEmail: string;
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
  projects: ObjectId[] ;
  departments: ObjectId[];
  employees: ObjectId[] ;
}





export type TaskData = {
  id: ObjectId;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  groupId: string;
  url: string;
  interactive: boolean;
  extendedProps: {
    assigned: ObjectId[];
    projectId: string;
    description: string;
    status: string;
    priority: string;
    progress: number;
  };
};

export type ProjectData = {
  _id: ObjectId;
  projectName: string;
  projectDescription: string;
  projectStartDate: string; 
  projectEndDate: string;
  projectStatus: string;
  projectCompletion: number;
  projectPhoto: string;
  tasks: TaskData[];
  assigned: ObjectId[];
};



export type TokenData = {
  id: ObjectId,
  email:string;
  accesLevel: AccesLevel;
  companyId: ObjectId;
}


export type AccesLevel = string | "admin" | "manager" | "employee";


export type User = {
  employeeId: ObjectId;
  companyId: ObjectId;
  email: string;
  password: string;
  accesLevel: AccesLevel;
}
