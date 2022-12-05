import { API_LOGIN } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "../storage/index.mjs";

// export const loginData = {
//   email: "aassjulebrus@stud.noroff.no",
//   password: "assjulebrus69",
// };

// export const loginForm = document.getElementById("loginForm");

// export const loginForm = document
//   .getElementById("loginForm")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const user = {
//       user: form.loginEmail.value,
//       password: form.loginPassword.value,
//     };
//     console.log(user);
//     async function loginUser(user) {
//       const postData = {
//         method: "POST",
//         headers: headers("application/json"),
//         body: JSON.stringify(user),
//       };
//       const response = await fetch(`${API_LOGIN}`, postData);
//       console.log(response);
//     }
//     loginUser(user);
//   });

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
  }
}
