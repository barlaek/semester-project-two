export function viewListing(listing) {
  const listingContainer = document.getElementById("listingContainer");
  listingContainer.innerHTML = "";
  if (listing) {
    listingContainer.innerHTML = `<div>
            <img src="${listing.media}" alt="${listing.description}">
            <div>
                <h2>${listing.title}</h2>
                <p>${listing.description}</p>
                <h4>current bids:</h4>
                ${listing.bids.map((bid) => {
                  return `<p>bidder: ${bid.bidderName} : amount: ${bid.amount}</p>`;
                })}
            </div>
        </div>`;
  }
}
