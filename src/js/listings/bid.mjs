import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// const url = `${API_LISTINGS}/${id}/bids`;

export async function placeBid(listingID, body, bid) {
  const postData = {
    method: "POST",
    headers: headers("application/json"),
    method: JSON.stringify({ body, bid }),
  };

  const response = await fetch(`${API_LISTINGS}/${listingID}/bids`, postData);
  console.log(response);
  const json = await response.json();
  console.log(json);
}
