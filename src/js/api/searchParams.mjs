import { API_PROFILES } from "./apiPaths.mjs";

export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const name = params.get('name');
