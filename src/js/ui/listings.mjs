export const listingsContainer = document.getElementById("listingsContainer");

export function viewListings(listings) {
  listingsContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      return (listingsContainer.innerHTML += `<div>
        <img src="${listing.media}"/>
        <p>${listing.title}</p>
        </div>`);
    });
  }
}
