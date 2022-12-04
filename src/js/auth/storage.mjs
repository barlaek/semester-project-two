/**
 * Saves an object to window storage
 * @param {name} key
 * @param {token} value
 */

export const saveToken = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Fetches the token from window storage
 * @param {key} key
 * @returns a parsed token
 */

export const loadToken = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};

/**
 * Removes
 * @param {token} key
 * from the storage
 */

export const removeToken = (key) => localStorage.remove(key);
