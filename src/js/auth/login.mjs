import { API_LOGIN } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "../storage/index.mjs";

// export const loginData = {
//   email: "aassjulebrus@stud.noroff.no",
//   password: "assjulebrus69",
// };

export async function loginUser(user) {
  try {
    const postData = {
      method: "POST",
      body: JSON.stringify(user),
      headers: headers("application/json"),
    };

    const response = await fetch(`${API_LOGIN}`, postData);
    console.log(response);
    const profile = await response.json();
    console.log(profile);
    if (response.ok) {
      saveToken("token", profile.accessToken);
      saveToken("profile", profile);
      return;
    }
    // if (response.ok) {
    //   const profile = await response.json();
    //   saveToken("token", profile.accessToken);
    //   delete profile.accessToken;
    //   saveToken("profile", profile);
    //   return profile;
    // }
  } catch (error) {
    console.log(error);
  }
}
