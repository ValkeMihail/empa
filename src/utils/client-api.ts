
import axios from "axios";
import { CompanyData } from "../../types";
import { store } from "@/store";
import { storeUserData } from "@/store/userSlice";

export const loginEmployee = async (email: string, password: string) => {
  
  try {
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    const data = response.data;

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      store.dispatch(storeUserData(data.token));
      return "success";
    } else {
      return "error"
    }
  } catch (error) {
    return "error"
  }
}


export const createCompany = async ( userName : string,  companyName : string  , email: string, password: string  ) => {

  try {
    const response = await axios.post("/api/register", {
      userName,
      email,
      password,
      companyName
    });

    const data = response.data;
    const token = data.token;
    


    if (response.status === 201 || response.status === 200) {
      localStorage.setItem("token", token)
      return "succes"
    } else {
      return "error"
    }
  } catch (error) {
    return "error"
  }


}


export const fetchCompanyData = async () => {
  const token = localStorage.getItem("token");

  if (token === null) {
    return "error";
  }
  try {
    const response = await axios.get(`/api/company/`, {
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

