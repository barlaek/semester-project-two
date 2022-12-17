import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { viewListing } from "../ui/listing.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = new URL(`${API_LISTINGS}/${id}`);
// const url = `${API_LISTINGS}/${id}?_seller=true&_bids=true`;

export async function getListing() {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };
  const response = await fetch(`${url}?_seller=true&_bids=true`, getData);
  const json = await response.json();
  console.log(json);
  viewListing(json);
}

getListing();
