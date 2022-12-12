import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

export async function createListing(newListing) {
  const postData = {
    method: "post",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };

  const response = await fetch(`${API_LISTINGS}`, postData);
  console.log(response);
  const json = await response.json();
  console.log(json)
}
