import { API_LISTINGS } from "../api/apiPaths.mjs";
import { loadToken } from "../storage/storage.mjs";
import { headers } from "../auth/headers.mjs";

export async function getListings() {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };
  const response = await fetch(`${API_LISTINGS}`, getData);
  console.log(response);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

getListings();
