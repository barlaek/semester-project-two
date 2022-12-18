export const listingsContainer = document.getElementById("listingsContainer");

export function viewListings(listings) {
  listingsContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      return (listingsContainer.innerHTML += `<a href="/src/html/listing/listing.html?id=${listing.id}">
        <img src="${listing.media}"/>
        <p>${listing.title}</p>
        <p>Ends at ${listing.endsAt}</p>
        </a>`);
    });
  }
}
