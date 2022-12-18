import { API_LISTINGS } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { loadToken } from "../storage/storage.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `${API_LISTINGS}/${id}`;

export async function deleteListing(id) {
  try {
    const deleteData = {
      method: "DELETE",
      headers: headers("application/json"),
      body: JSON.stringify(id),
    };

    const response = await fetch(`${url}`, deleteData);
    const profile = loadToken("profile");
    if (response) {
      location.href = `/src/html/profile.html?name=${profile.name}`;
    }
  } catch (error) {
    console.log(error);
  }
}
