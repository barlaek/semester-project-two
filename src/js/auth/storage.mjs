/**
 * Saves an object to window storage
 * @param {name} key
 * @param {token} value
 */

export function saveToken(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Fetches the token from window storage
 * @param {key} key
 * @returns a parsed token
 */

export function loadToken(key) {
  try {
    return localStorage.getItem(JSON.parse(key));
  } catch {
    return null;
  }
}

/**
 * Removes
 * @param {token} key
 * from the storage
 */

export function removeToken(key) {
  localStorage.remove(key);
}
