import { loadToken } from "../storage/storage.mjs";

export const loginBtn = document
  .getElementById("login")
  .addEventListener("click", (event) => {
    event.preventDefault();
    window.location = `/html/login.html`;
  });

export const createListing = document
  .getElementById("createListing")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const profile = loadToken("profile");
    window.location = `/html/createListing.html?name=${profile.name}`;
  });
