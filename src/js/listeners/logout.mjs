import { logoutUser } from "../auth/logout.mjs";

export const logout = document
  .getElementById("logoutBtn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    logoutUser();
    window.location.href = "/";
  });
