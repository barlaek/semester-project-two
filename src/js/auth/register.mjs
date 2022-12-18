import { API_REGISTER } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";

// export async function register(name, email, password) {
//   const response = await fetch(`${API_REGISTER}`, {
//     method: "POST",
//     body: JSON.stringify({ name, email, password }),
//     headers: headers("application.json"),
//   });

//   console.log(response);

//   if (response.ok) {
//     return await response.json();
//   }

//   throw new Error(response.statusText);
// }

// export async function registerListener(event) {
//   event.preventDefault();
//   try {
//     const form = event.target;
//     const data = new FormData(form);
//     const name = data.get("name");
//     const email = data.get("email");
//     const password = data.get("password");
//     register(name, email, password);
//     location.reload();
//   } catch (error) {
//     console.log(error);
//   }
// }

// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", registerListener);

// export const registeredUser = {
//   name: "aassjulebrus",
//   email: "aassjulebrus@stud.noroff.no",
//   password: "assjulebrus69",
// };

// console.log(registeredUser);

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
