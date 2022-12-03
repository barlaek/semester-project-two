export function saveToken(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
