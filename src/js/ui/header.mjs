import { loadToken } from "../storage/storage.mjs";

export const createListing = document
  .getElementById("createListing")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const profile = loadToken("profile");
    window.location = `/html/createListing.html?name=${profile.name}`;
  });
