import { loginUser } from "../auth/login.mjs";

export const form = document
  .getElementById("loginForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const user = {
      email: form.loginEmail.value,
      password: form.loginPassword.value,
    };
    loginUser(user);
  });
