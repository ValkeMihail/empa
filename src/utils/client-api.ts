
import axios from "axios";
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

    if (response.status === 201 || response.status === 200) {
      return "succes"
    } else {
      return "error"
    }
  } catch (error) {
    return "error"
  }


}


