import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { viewListings } from "../ui/listings.mjs";
import { search } from "./search.mjs";
import { filterByPopularity, filterByRecently } from "./filter.mjs";

export async function getListings() {
  try {
    const getData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };
    const response = await fetch(`${API_LISTINGS}?_active=true`, getData);
    if (response.ok) {
      const listings = await response.json();
      viewListings(listings);
      search(listings);
      filterByRecently(listings);
      filterByPopularity(listings);
    }
  } catch(error) {
    console.log(error)
  }

}