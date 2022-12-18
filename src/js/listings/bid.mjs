import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `${API_LISTINGS}/${id}/bids`;

/**
 * bidding function that takes a
 * @param {number} bid
 * and POSTs it to the API
 */

export async function placeBid(bid) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(bid),
    };

    const response = await fetch(`${url}`, postData);
    if (response.ok) {
      location.reload();
    } else {
      alert("oops! something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
