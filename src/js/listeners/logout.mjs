import { logoutUser } from "../auth/logout.mjs";

export const logout = document
  .getElementById("logoutForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    logoutUser();
    window.location.href = "/";
  });
