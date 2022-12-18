import { createListing } from "../listings/createListing.mjs";

export const listingForm = document
  .getElementById("newListingForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const newListing = {
      title: form.title.value,
      description: form.description.value,
      tags: Array.of(form.listingTag.value),
      media: Array.of(form.newMedia.value.toString()),
      endsAt: new Date(form.endsAt.value).toString(),
    };
    createListing(newListing);
  });
