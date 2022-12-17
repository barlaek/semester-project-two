import { API_LISTINGS } from "../api/apiPaths.mjs";
import { placeBid } from "../listings/bid.mjs";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// const url = `${API_LISTINGS}/${id}/bids`;

export const bid = document
  .getElementById("bidForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const bid = {
      amount: parseInt(form.placeBid.value),
    };
    placeBid(bid);
    console.log(bid);
    // window.location.replace(`${url}=${bid}?_seller=true&_bids=true`);
});

// const bidBtn = document
//   .getElementById("bid")
//   .addEventListener("click", (event) => {
//     event.preventDefault();
//     bidInput();
//   });

// function bidInput() {
//   const input = document.getElementById("placeBid");
//   const bid = {
//     amount: input.value,
//   };
//   placeBid(bid);
//   console.log(bid);
// }
