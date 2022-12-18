import { loadToken } from "../storage/storage.mjs";

const update = document
  .getElementById("update")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const profile = loadToken("profile");
    const id = profile.name;
    location.href = `/src/html/updateAvatar/updateAvatar.html?name=${id}`;
  });
