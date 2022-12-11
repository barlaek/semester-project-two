import { loginUser } from "../auth/login.mjs";
import { loadToken } from "../storage/storage.mjs";

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
    const profile = loadToken("profile");
    console.log(profile);
    window.location = `/index.html?name=${profile.name}`;
  });