import { API_REGISTER } from "../api/apiPaths.mjs";
import { headers } from "./headers.mjs";

export async function register(name, email, password) {
  const response = await fetch(`${API_REGISTER}`, {
    method: "post",
    body: JSON.stringify({ name, email, password }),
    headers: headers("application.json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
