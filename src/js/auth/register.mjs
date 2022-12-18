import { API_REGISTER } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";

export async function registerUser(user) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(user),
    };

    const response = await fetch(`${API_REGISTER}`, postData);
    if (response.ok) {
      window.location = `/html/login.html`;
    }
  } catch (error) {
    console.log(error);
  }
}
