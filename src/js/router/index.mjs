import { getListings, getListing } from "../listings/listings.mjs";
// import { getProfiles } from "../profiles/profiles.mjs";
import { loadToken, saveToken } from "../storage/storage.mjs";
import { getSearchParams } from "../api/searchParams.mjs";
import { isLoggedIn } from "../auth/state.mjs";
import { viewListings } from "../ui/listings.mjs";

function authGuard(callback = () => {}, view = "") {
  if (isLoggedIn()) {
    return callback();
  } else {
    if (view) {
      location.href = `/`;
    }
  }
}

async function route() {
  const { view, listingId, name } = getSearchParams();
  switch (view) {
    case "listing":
      return authGuard(async () => {
        const listing = await getListing();
        console.log(listing);
        return viewListings(listing);
      });
    /* Pass the single listing function through the authGuard function */

    case "listings":
      return authGuard(async () => {
        const listings = await getListings();
        console.log(listings);
        return viewListings(listings);
      }, view);
    /* Passe the listings function through the authGuard function */

    case "profile":
    /* Pass the Single Profile function through the authGuard function */

    case "profiles":
    /* Pass the profiles function through the authGuard function */
  }
}

export default async () => {
  const view = await route();
  /* Call the UI function and pass in the view variable*/
};
