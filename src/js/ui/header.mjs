import { doc } from "prettier";
import { loadToken } from "../storage/storage.mjs";

export const registerBtn = document
  .getElementById("registerBtn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    window.location = `/html/register.html`;
  });

export const loginBtn = document
  .getElementById("loginBtn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    window.location = `/html/login.html`;
  });

export const createListing = document
  .getElementById("createBtn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const profile = loadToken("profile");
    window.location = `/html/createListing.html?name=${profile.name}`;
  });
