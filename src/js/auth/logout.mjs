import { removeToken } from "./storage.mjs";

export function logoutUser() {
  removeToken("token");
  removeToken("profile");
}

// logoutUser();
