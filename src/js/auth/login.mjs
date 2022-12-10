import { API_LOGIN } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "../storage/index.mjs";

// export const loginData = {
//   email: "aassjulebrus@stud.noroff.no",
//   password: "assjulebrus69",
// };

export async function loginUser(email, password) {
  const postData = {
    method: "POST",
    headers: headers("application/json"),
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(`${API_LOGIN}`, postData);
  console.log(response);
  if (response.ok) {
    const profile = await response.json();
    saveToken("token", profile.accessToken);
    delete profile.accessToken;
    saveToken("profile", profile);
    return profile;
  }
}
