import { API_PROFILES } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

/**
 * GET request that returns a an array of profile objects
 */

export async function getProfiles() {
  const response = await fetch(`${API_PROFILES}`, {
    headers: headers("application/json"),
    body: JSON.stringify(),
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
}

getProfiles();
