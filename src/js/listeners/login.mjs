import { loginUser } from "../auth/login.mjs";

export const form = document
  .getElementById("loginForm")
  .addEventListener("submit", (event) => {
    event.preventDefault;
    const form = event.target;
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    const { name } = loginUser(email, password);
    window.location.replace = `/index.html/?view=profile&name=${name}`;
  });

  