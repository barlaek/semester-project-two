import { API_LOGIN } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "../storage/index.mjs";

// export const loginData = {
//   email: "aassjulebrus@stud.noroff.no",
//   password: "assjulebrus69",
// };

export async function loginUser(email, password) {
  try {
    const postData = {
      method: "POST",
      body: JSON.stringify(email, password),
      headers: headers("application/json"),
    };

    const response = await fetch(`${API_LOGIN}`, postData);
    console.log(response);
    if (response.ok) {
      const profile = await response.json();
      saveToken("token", profile.accessToken);
      // delete profile.accessToken;
      saveToken("profile", profile);
      return profile;
    }
  } catch (error) {
    console.log(error);
  }
}
