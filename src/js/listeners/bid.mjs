import { placeBid } from "../listings/bid.mjs";

export const bid = document
  .getElementById("bidForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const bid = {
      amount: parseInt(form.bidInput.value),
    };
    // placeBid(+bid);
    console.log(bid);
  });