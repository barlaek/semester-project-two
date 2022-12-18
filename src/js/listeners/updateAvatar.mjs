import { API_PROFILES } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { loadToken } from "../storage/storage.mjs";

const profile = loadToken("profile");
const name = profile.name;

async function updateAvatar(mediaURL) {
  try {
    const putData = {
      method: "PUT",
      headers: headers("application/json"),
      body: JSON.stringify(mediaURL),
    };

    const response = await fetch(`${API_PROFILES}/${name}/media`, putData);
    if (response.ok) {
      location.href = `/profile.html?name=${name}`;
    }
  } catch (error) {
    console.log(error);
  }
}

const updateForm = document
  .getElementById("updateForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const media = {
      avatar: form.updateURL.value,
    };
    updateAvatar(media);
  });
