import { viewListings } from "../ui/listings.mjs";

export function filterByRecently(listings) {
  const filterBtn = document.getElementById("filterRecent");
  filterBtn.onclick = function () {
    const recently = new Date(
      new Date().setDate(new Date().getDate() - 2)
    ).toISOString();
    const filtered = listings.filter((listing) => listing.created >= recently);
    console.log(filtered);
    viewListings(filtered);
  };
}

export function filterByPopularity(listings) {
  const filterBtn = document.getElementById("filterPopular");
  filterBtn.onclick = function () {
    const filtered = listings.filter((listing) => listing._count.bids >= 10);
    console.log(filtered);
    viewListings(filtered);
  };
}
