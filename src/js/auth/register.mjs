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
      window.location = `/src/html/login.html`;
    } else {
      alert(
        "oops! something went wrong. this user might already exist or please provide a valid email address ending in @noroff.no or @stud.noroff.no"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
