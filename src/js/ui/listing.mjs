// import { isLoggedIn, profile } from "../auth/state.mjs";
// import { getListing } from "../listings/listings.mjs";

// export const listingPage = async (listingId) => {
//   if (!isLoggedIn()) {
//     location.href = "/";
//   } else {
//     profile();
//   }

//   if (listingId) {
//     const listing = await getListing(listingId);
//     const owner = listing.seller.name === me.name;
//     console.log(listing);
//   }
// };

// listingPage();

export async function viewListing(listing) {
  const listingContainer = document.getElementById("listingContainer");
  listingContainer.innerHTML = "";
  if (listing) {
    listingContainer.innerHTML = `<div>
            <img src="${listing.media}" alt="${listing.description}">
            <div>
                <h2>${listing.title}</h2>
                <p>${listing.description}</p>
                <h4>current bids:</h4>
            </div>
        </div>`;
  }
}
