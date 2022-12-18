import { updateListing } from "../listings/updateListing.mjs";

export const updateListingForm = document
  .getElementById("updateListingForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const upDatedListing = {
      title: form.title.value,
      description: form.description.value,
      tags: Array.of(form.listingTag.value),
      media: Array.of(form.newMedia.value.toString()),
    };
    updateListing(upDatedListing);
  });
