
import axios from "axios";
import { CompanyData } from "../../types";

export const loginEmployee = async (email: string, password: string) => {
  
  try {
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    const data = response.data;

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      return data.companyData as CompanyData;  
    } else {
      return "error"
    }
  } catch (error) {
    return "error"
  }
}


export const createCompany = async ( userName : string,  companyName : string  , email: string, password: string ,  ) => {

  try {
    const response = await axios.post("/api/register", {
      userName,
      email,
      password,
      companyName
    });

    const data = response.data;

    if (response.status === 201 || response.status === 200) {
      console.log("success" , data)
      return "success"  
    } else {
      return "error"
    }
  } catch (error) {
    return "error"
  }


}


export const fetchCompanyData = async (companyName: string, token: string) => {
  if (token === null) {
    return "error";
  }

  try {
    const response = await axios.get(`/api/company/${companyName}`, {
      headers: {
        authorization: token,
      },
    });

    const data = response.data.company;
    if (response.status === 200) {
      return data as CompanyData;
    } else {
      return "error";
    }
  } catch (error) {
    return "error";
  }
};

