import { API_PROFILES } from "../api/apiPaths.mjs";
import { getSearchParams } from "../api/searchParams.mjs";
import { headers } from "../auth/headers.mjs";

// export async function getProfiles() {
//   const response = await fetch(`${API_PROFILES}`, { headers: headers() });
//   console.log(response);
//   const json = await response.json();
//   console.log(json);
// }

// getProfiles();

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
