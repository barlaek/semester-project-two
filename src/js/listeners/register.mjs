import { registerUser } from "../auth/register.mjs";

export const newUser = document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    registerUser(name, email, password);
    window.location = `/html/login.html`;
  });
