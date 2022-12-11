import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

export async function getListings() {
  const getData = {
    method: "GET",
    headers: headers("application/json"),
    body: JSON.stringify(),
  };
  const response = await fetch(`${API_LISTINGS}`, getData);
  console.log(response);
  const json = await response.json();
  console.log(json);
  // if (response.ok) {
  //   return await response.json();
  // }

  // throw new Error(response.statusText);
}
