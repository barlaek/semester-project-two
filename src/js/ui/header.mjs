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
      window.location = `/register.html`;
    });

  const loginBtn = document
    .getElementById("loginBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      window.location = `/login.html`;
    });

  const createListing = document
    .getElementById("createBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const profile = loadToken("profile");
      window.location = `/createListing.html?name=${profile.name}`;
    });

  const profile = document
    .getElementById("profile")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const profile = loadToken("profile");
      window.location = `/profile.html?name=${profile.name}`;
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
