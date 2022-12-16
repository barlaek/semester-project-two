import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { viewListings } from "../ui/listings.mjs";

export async function getListings() {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };
  const response = await fetch(`${API_LISTINGS}`, getData);
  console.log(response);
  const listings = await response.json();
  console.log(listings);
  viewListings(listings);
  search(listings);
  filterByRecently(listings);
}

function search(listings) {
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
    console.log(filteredListings);
    viewListings(filteredListings);
  };
}

function filterByRecently(listings) {
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

// getListings();

// export async function getListing(id) {
//   const getData = {
//     method: "GET",
//     headers: headers("application/json"),
//     body: JSON.stringify(),
//   };
//   const response = await fetch(
//     `${API_LISTINGS}/${id}?_seller=true&_bids=true`,
//     getData
//   );
//   const json = await response.json();
//   console.log(json);
// }

// getListing("9af14798-d6b7-4c06-8fc8-09c1fa1c09bb");
