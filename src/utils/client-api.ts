
import axios from "axios";

export const loginEmployee = async (email: string, password: string) => {
  
   try {
     const response = await axios.post("/api/login", {
       email,
       password,
     });
 
     const data = response.data;
 
     if (response.status === 200) {
       localStorage.setItem("token", data.token);
       return "success"  
     } else {
       return "error"
     }
   } catch (error) {
      return "error"
   }
}