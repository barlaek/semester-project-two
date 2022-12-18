import { deleteListing } from "../listings/deleteListing.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export const deleteForm = document
  .getElementById("delete")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    deleteListing(id)
  });
