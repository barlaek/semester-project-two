export const listingsContainer = document.getElementById("listingsContainer");

export function viewListings(listings) {
  listingsContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      return (listingsContainer += `<div>
            <h4>${listing.title}</h4>
        </div>`);
    });
  }
}
