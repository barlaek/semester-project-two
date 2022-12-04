import { API_PROFILES } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

export async function getProfiles() {
  const response = await fetch(`${API_PROFILES}`, { headers: headers() });
  console.log(response);
  const json = await response.json();
  console.log(json);
}

getProfiles();

export async function getProfile(name) {
  const response = await fetch(`${API_PROFILES}/${name}?_listings=true`, {
    headers: headers(),
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
}

getProfile();
