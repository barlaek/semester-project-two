import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function updateListing(input) {
  const upData = {
    method: "PUT",
    headers: headers("application/json"),
    body: JSON.stringify(input),
  };

  const response = await fetch(`${API_LISTINGS}/${id}`, upData);
  console.log(response);
  const json = await response.json();
  console.log(json);
  if (response.ok) {
    location.reload();
  }
}
