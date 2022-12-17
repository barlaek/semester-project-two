export const listingsContainer = document.getElementById("listingsContainer");

export function viewListings(listings) {
  listingsContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      return (listingsContainer.innerHTML += `<a href="/html/listing.html?id=${listing[i].id}?_seller=true&_bids=true">
        <img src="${listing.media}"/>
        <p>${listing.title}</p>
        <p>Ends at ${listing.endsAt}</p>
        </a>`);
    });
  }
}
