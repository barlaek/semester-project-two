import { API_LOGIN, API_REGISTER } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";

export async function register(name, email, password) {
  const response = await fetch(`${API_REGISTER}`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: headers("application.json"),
  });

  console.log(response);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function registerListener(event) {
  event.preventDefault();
  try {
    const form = event.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    register(name, email, password);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", registerListener);

const registeredUser = {
  name: "bombombadil",
  email: "bombombadil_ba@stud.noroff.no",
  password: "1234567890",
};

console.log(registeredUser);

async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_LOGIN}`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: headers("application.json"),
    });

    if (response.ok) {
      return await response.json();
    }

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

loginUser({ email: "bombombadil_ba@stud.noroff.no", password: "1234567890" });
