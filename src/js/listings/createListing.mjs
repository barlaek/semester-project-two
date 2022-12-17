import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

export async function createListing(newListing) {
  const postData = {
    method: "POST",
    headers: headers("application/json"),
    body: JSON.stringify(newListing),
  };

  const response = await fetch(`${API_LISTINGS}`, postData);
  console.log(response);
  const json = await response.json();
  console.log(json);
  if(response.ok) {
    location.reload()
  }
}
