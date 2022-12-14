import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { getListings } from "../listings/listings.mjs";
import { createListing } from "../listings/createListing.mjs";

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

  const listingForm = document
    .getElementById("newListingContainer")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const newListing = {
        title: form.title.value,
        description: form.description.value,
        tags: form.tags.value,
        media: form.newMedia.value,
        endsAt: new Date(""),
      };
      console.log(newListing);
      createListing(newListing);
    });

  getListings();
}
