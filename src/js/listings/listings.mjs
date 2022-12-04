import { API_LISTINGS } from "../api/apiPaths.mjs";

export async function getListings() {
  const response = await fetch(API_LISTINGS);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
