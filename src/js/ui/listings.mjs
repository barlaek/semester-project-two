export function viewListings(listings) {
  const listingsContainer = document.getElementById("listingsContainer");
  listingsContainer.innerHTML = "";
  if(listings) {
    return listingsContainer +=
        `<div>
            <h4>${listings.title}</h4>
        </div>`
  }
}
