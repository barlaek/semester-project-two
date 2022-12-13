import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { getListings } from "../listings/listings.mjs";

export async function header() {
  const registerBtn = document
    .getElementById("registerBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      window.location = `/html/register.html`;
    });

  const loginBtn = document
    .getElementById("loginBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      window.location = `/html/login.html`;
    });

  const createListing = document
    .getElementById("createBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const profile = loadToken("profile");
      window.location = `/html/createListing.html?name=${profile.name}`;
    });

  const logout = document
    .getElementById("logoutBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      logoutUser();
      location.href = "/";
    });

  getListings();
}
