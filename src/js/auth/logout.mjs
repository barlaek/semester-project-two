import { removeToken } from "../storage/storage.mjs";

export function logoutUser() {
  removeToken("token");
  removeToken("profile");
}

// logoutUser();
