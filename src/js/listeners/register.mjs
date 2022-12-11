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
    registerUser(newUser)
    console.log(newUser)
    // const data = new FormData(form);
    // const name = data.get("name");
    // const email = data.get("email");
    // const password = data.get("password");
    // registerUser(name, email, password);
    // window.location = `/html/login.html`;
  });
