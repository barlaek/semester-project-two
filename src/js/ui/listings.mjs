export const listingsContainer = document.getElementById("listingsContainer");

/**
 * function that takes an
 * @param {array} listings
 * and renders the data into HTML
 */

export function viewListings(listings) {
  const date = new Date(0);
  listingsContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      return (listingsContainer.innerHTML += `<a href="/src/html/listing/listing.html?id=${
        listing.id
      }" class="w-96 h-96 bg-white rounded border-solid border-1 shadow">
          <div class="rounded-t">
            <img class="object-cover h-64 w-96 rounded-t" src="${
              listing.media
            }" />
          </div> 
          <div class="p-4">
            <p class="font-bold">${listing.title}</p>
            <p>Ends at ${date.toDateString(listing.endsAt)}</p>
          </div> 
        </a>`);
    });
  }
}
