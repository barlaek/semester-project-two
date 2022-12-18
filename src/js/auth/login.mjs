import { API_LOGIN } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "../storage/index.mjs";

export async function loginUser(user) {
  try {
    const postData = {
      method: "POST",
      body: JSON.stringify(user),
      headers: headers("application/json"),
    };

    const response = await fetch(`${API_LOGIN}`, postData);
    const profile = await response.json();
    if (response.ok) {
      saveToken("token", profile.accessToken);
      delete profile.accessToken;
      saveToken("profile", profile);
      window.location = `/index.html?name=${profile.name}`;
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
