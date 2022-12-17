import { API_PROFILES } from "../api/apiPaths.mjs";
import { getSearchParams } from "../api/searchParams.mjs";
import { headers } from "../auth/headers.mjs";
import { viewListing } from "../ui/listing.mjs";
import { listingCard, viewProfile } from "../ui/profile.mjs";

export async function getProfile() {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };

  const name = getSearchParams().name;

  const response = await fetch(
    `${API_PROFILES}/${name}?_listings=true`,
    getData
  );
  console.log(response);
  const json = await response.json();
  console.log(json);
  viewProfile(json);
  const listingsArray = json.listings
  console.log(listingsArray)
  const listingsObject = listingsArray.map((object) => {
    console.log(object)
    listingCard(object)
  })
  //   listingCard(json.listings);
}

getProfile();
