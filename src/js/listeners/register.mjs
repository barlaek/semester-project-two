import { registerUser } from "../auth/register.mjs";

export const newUser = document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const newUser = {
      name: form.registerName.value,
      email: form.registerEmail.value,
      password: form.registerPassword.value,
    };
    registerUser(newUser);
  });
