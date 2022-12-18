import { viewListings } from "../ui/listings.mjs";

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
