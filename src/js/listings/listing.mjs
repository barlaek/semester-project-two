import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { viewListing } from "../ui/listing.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = new URL(`${API_LISTINGS}/${id}`);

export async function getListing() {
  try {
    const getData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };
    const response = await fetch(`${url}?_seller=true&_bids=true`, getData);
    const json = await response.json();
    if (response.ok) {
      viewListing(json);
    } else {
      alert("oops! something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
}

getListing();
