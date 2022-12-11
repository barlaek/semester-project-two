import { getListings } from "./listings.mjs";
import { viewListings } from "../ui/listings.mjs";

getListings();

let listings = [];

export const search = document
  .getElementById("search")
  .addEventListener("keyup", (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredListings = listings.filter((listing) => {
      return listing.title.toString().toLowerCase().includes(searchString);
    });
    console.log(filteredListings);
    viewListings(filteredListings);
  });
