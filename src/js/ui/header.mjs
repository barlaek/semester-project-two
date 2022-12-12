import { loadToken } from "../storage/storage.mjs";

export const createListing = document
  .getElementById("createListing")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const name = loadToken("profile");
    window.location = `<a href="/html/createListing.html?name=${name.name}</a>"`;
  });
