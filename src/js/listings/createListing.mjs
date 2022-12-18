import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

/**
 * creates a new listing
 * @param {object} newListing
 * and POSTs it on the API
 */

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
    } else {
      alert(
        "oops! something went wrong. please fill in the correct details. media must be a valid url"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
