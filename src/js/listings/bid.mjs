import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `${API_LISTINGS}/${id}/bids`;

export async function placeBid(bid) {
  const postData = {
    method: "POST",
    headers: headers("application/json"),
    method: JSON.stringify(bid),
  };

  const response = await fetch(`${url}`, postData);
  const json = await response.json();
  console.log(json)
}
