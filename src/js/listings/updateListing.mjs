import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function updateListing(input) {
  try {
    const upData = {
      method: "PUT",
      headers: headers("application/json"),
      body: JSON.stringify(input),
    };

    const response = await fetch(`${API_LISTINGS}/${id}`, upData);
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
