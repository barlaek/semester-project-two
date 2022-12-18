import { viewListings } from "../ui/listings.mjs";

/**
 * search function that takes a
 * @param {string} listings
 * and returns an array of objects with similar string values
 */

export function search(listings) {
  const search = document.getElementById("search");
  search.onkeyup = function (event) {
    const searchString = event.target.value.trim().toLowerCase();
    const filteredListings = listings.filter((listing) => {
      if (
        listing.title.toLowerCase().includes(searchString) ||
        listing.tags.toString().toLowerCase().includes(searchString)
      ) {
        return true;
      }
    });
    viewListings(filteredListings);
  };
}
