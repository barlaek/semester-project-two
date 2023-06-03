export const listingsContainer = document.getElementById("listingsContainer");

/**
 * function that takes an
 * @param {array} listings
 * and renders the data into HTML
 */

export function viewListings(listings) {
  listingsContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      return (listingsContainer.innerHTML += `<a href="/src/html/listing/listing.html?id=${listing.id}" class="w-96 h-48 bg-red-500">
          <div>
            <img class="object-scale-down h-32 w-96" src="${listing.media}" />
          </div>  
          <p>${listing.title}</p>
          <p>Ends at ${listing.endsAt}</p>
        </a>`);
    });
  }
}
