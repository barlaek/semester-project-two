import { loginUser } from "../auth/login.mjs";

export const form = document
  .getElementById("loginForm")
  .addEventListener("submit", (event) => {
    event.preventDefault;
    const form = event.target;
    // const user = {
    //   email: form.loginEmail.target,
    //   password: form.loginPassword.target,
    // };
    // loginUser(user);
    // console.log(user);
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    const { name } = loginUser(email, password);
    window.location = `/index.html?name=${name}`;
  });

// export async function loginListener(event) {
//   event.preventDefault();
//   const form = event.target;
//   const data = new FormData(form);
//   const email = data.get("email");
//   const password = data.get("password");
//   const { name } = await loginUser(email, password);
//   window.location.replace = `/index.html?name=${name}`;
// }
