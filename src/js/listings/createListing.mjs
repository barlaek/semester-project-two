import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

export async function createListing(newListing) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(newListing),
    };

    const response = await fetch(`${API_LISTINGS}`, postData);
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
