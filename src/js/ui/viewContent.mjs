import { clear } from "../tools/clear.mjs";

export function viewContent() {
  const main = document.querySelector("main");
  clear(main);
  main.append(...arguments);
}
