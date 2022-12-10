import { loginUser } from "../auth/login.mjs";
import { API_PROFILES } from "../api/apiPaths.mjs";

export const form = document
  .getElementById("loginForm")
  .addEventListener("submit", (event) => {
    event.preventDefault;
    const form = event.target;
    // const user = {
    //   email: form.loginEmail.value,
    //   password: form.loginPassword.value,
    // };
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    const { name } = loginUser(email, password);
    window.location.replace = `/index.html?name=${name}`;
  });
