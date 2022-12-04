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
  if (response.ok) {
    const profile = await response.json();
    saveToken("token", profile.accessToken);
    delete profile.accessToken;
    saveToken("profile", profile);
    return profile;
    console.log(profile);
  }
}

loginUser(loginData);
