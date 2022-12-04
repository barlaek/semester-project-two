import { API_LOGIN } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "./storage.mjs";

export const loginData = {
    email: "aassjulebrus@stud.noroff.no",
    password: "assjulebrus69",
  };
  
  export async function loginUser(user) {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(user),
    };
  
    const response = await fetch(`${API_LOGIN}`, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      saveToken("token", json.accessToken);
    }
  }
  
//   loginUser(loginData);