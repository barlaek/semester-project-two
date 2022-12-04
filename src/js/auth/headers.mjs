import * as storage from "./storage";

export const headers = (contentType) => {
  const token = storage.loadToken("token");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
