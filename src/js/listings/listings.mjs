import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { viewListings } from "../ui/listings.mjs";

export async function getListings(limit = 20, offset = 0) {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };
  const response = await fetch(
    `${API_LISTINGS}?limit=${limit}&${offset}_seller=true&_bids=true`,
    getData
  );
  console.log(response);
  const listings = await response.json();
  console.log(listings);
  viewListings(listings);
  search(listings);
  filter(listings);
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

// function filter(listings) {
//   const filterBtn = document
//     .getElementById("filterButton")
//     .addEventListener("click", (event) => {
//       event.preventDefault();
//       const recently = new Date();
//       const newest = listings.filter(
//         (listing) =>
//           listing.created === recently.setDate(recently.getDate() - 2)
//       );
//       console.log(newest);
//       viewListings(newest);
//     });
// }

function filter(listings) {
  const filterBtn = document.getElementById("filterButton");
  filterBtn.onclick = function () {
    const newDate = new Date();
    const recently = newDate.setDate(newDate.getDate() - 2);
    const filtered = listings.filter((listing) => {
      if (listing.created >= recently.toString()) {
        return true;
      }
    });
    console.log(filtered);
    viewListings(filtered);
  };
}

// function filter(listings) {
//   const filterBtn = document.getElementById("filterButton");
//   filterBtn.onclick = function () {
//     const filteredListing = listings.slice((listing) => {
//       if (listing.sort((a, b) => a.endsAt - b.endsAt)) {
//         return true;
//       }
//     });
//     console.log(filteredListing);
//     viewListings(filteredListing);
//   };
//   // filterBtn.addEventListener("click", (listings) => {
//   //   const filteredListing = listing
//   //     .slice()
//   //     .sort((listing, listingA) => a.endsAt - b.endsAt);
// }

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
