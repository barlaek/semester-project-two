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
    `${API_LISTINGS}?limit=${limit}&${offset}`,
    getData
  );
  console.log(response);
  const listings = await response.json();
  console.log(listings);
  viewListings(listings);
}

getListings();

export async function getListing(id) {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };
  const response = await fetch(
    `${API_LISTINGS}/${id}?_seller=true&_bids=true`,
    getData
  );
  const json = await response.json();
  console.log(json);
}

getListing("9af14798-d6b7-4c06-8fc8-09c1fa1c09bb");
