import { API_PROFILES } from "../api/apiPaths.mjs";
import { headers } from "../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");
const url = `${API_PROFILES}/${name}/media`;

async function updateAvatar(mediaURL) {
  const putData = {
    method: "PUT",
    headers: headers("application/json"),
    body: JSON.stringify(url),
  };

  const response = await fetch(`${url}`, putData);
  console.log(response);
  const json = await response.json();
  console.log(json);
}

const updateForm = document
  .getElementById("updateForm")
  .addEventListener("submit", (event) => {
    event.defaultPrevented();
    const form = event.target;
    const media = {
      avatar: form.updateURL.value,
    };
    updateAvatar(media);
  });
