import { createListing } from "../listings/createListing.mjs";
// import { loadToken } from "../storage/storage.mjs";

export const listingForm = document
  .getElementById("newListingForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const newListing = {
      title: form.title.value,
      description: form.description.value,
      tags: form.tags.value,
      media: form.newMedia.value,
      endsAt: new Date(form.endsAt.value).toString(),
    };
    console.log(newListing);
    createListing(newListing);
  });
