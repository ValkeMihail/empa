export interface DepartmentData {
  _id: string;
  departmentName: string;
  departmentDescription: string;
  departmentPhoto: string;
  departmentEmployees: string[];
}


export type EmployeeData = {
  _id: string;
  employeeName: string;
  employeeEmail: string;
  employeeRole: string;
  employeeStartDate: string;
  employeePhoto: string;
  employeeDepartmentId: string;
  employeePerformance: { month: string; performance: number }[];
  employeeAttributes: { attribute: string; value: number }[];
};



export interface CompanyData {
  _id: string;
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;
  companyWebsite: string;
  companyPassword: string;
  companyLogo: string;
  projects: string[];
  departments: string[];
  employees: string[];
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
