import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { getListings } from "../listings/listings.mjs";

export async function header() {
  const home = document
    .getElementById("home")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const profile = loadToken("profile");
      window.location = `/index.html?name=${profile.name}`;
    });

  const registerBtn = document
    .getElementById("registerBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      window.location = `/src/html/register/register.html`;
    });

  const loginBtn = document
    .getElementById("loginBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      window.location = `/src/html/login/login.html`;
    });

  const createListing = document
    .getElementById("createBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const profile = loadToken("profile");
      window.location = `/src/html/createListing/createListing.html?name=${profile.name}`;
    });

  const profile = document
    .getElementById("profile")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const profile = loadToken("profile");
      window.location = `/src/html/profile/profile.html?name=${profile.name}`;
    });

  const logout = document
    .getElementById("logoutBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      logoutUser();
      location.href = "/";
    });
}

export async function indexList() {
  getListings();
}
