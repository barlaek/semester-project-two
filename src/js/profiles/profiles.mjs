import { API_PROFILES } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { loadToken } from "../auth/storage.mjs";

export async function getProfiles() {
  const response = await fetch(`${API_PROFILES}`, {
    method: "GET",
    headers: headers("application/json"),
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
}

getProfiles();

console.log()