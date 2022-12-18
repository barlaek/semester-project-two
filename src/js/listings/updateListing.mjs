import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

/**
 * an updating function that takes a
 * @param {object} input 
 * and PUTs data on the object to the objects corresponding ID
 */

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
    } else {
      alert(
        "oops! something went wrong. please fill in the correct details. media must be a valid url"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
