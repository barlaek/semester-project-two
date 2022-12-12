import { isLoggedIn, profile } from "../auth/state.mjs";
import { getListing } from "../listings/listings.mjs";

export const listingPage = async (listingId) => {
  if (!isLoggedIn()) {
    location.href = "/";
  } else {
    profile();
  }

  if (listingId) {
    const listing = await getListing(listingId);
    const owner = listing.seller.name === me.name;
    console.log(listing);
  }
};
