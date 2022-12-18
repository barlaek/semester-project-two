import { API_PROFILES } from "../api/apiPaths.mjs";
import { getSearchParams } from "../api/searchParams.mjs";
import { headers } from "../auth/headers.mjs";
import { listingCard, viewProfile } from "../ui/profile.mjs";

export async function getProfile() {
  try {
    const getData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };

    const name = getSearchParams().name;

    const response = await fetch(
      `${API_PROFILES}/${name}?_listings=true`,
      getData
    );
    if (response.ok) {
      const json = await response.json();
      viewProfile(json);
      listingCard(json.listings);
    }
  } catch (error) {
    console.log(error);
  }
}

getProfile();
