import { API_PROFILES } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";
import { loadToken } from "../storage/storage.mjs";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const name = params.get("name");
// const url = `${API_PROFILES}/${name}/media`;

const profile = loadToken("profile");
const name = profile.name;

async function updateAvatar(mediaURL) {
  const putData = {
    method: "PUT",
    headers: headers("application/json"),
    body: JSON.stringify(mediaURL),
  };

  const response = await fetch(`${API_PROFILES}/${name}/media`, putData);
  console.log(response);
  const json = await response.json();
  console.log(json);
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
    console.log(media);
    location.href = `/html/profile.html?name=${name}`;
  });
