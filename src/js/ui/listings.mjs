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
      return (listingsContainer.innerHTML += `<a href="/src/html/listing/listing.html?id=${listing.id}" class="w-96 h-96 bg-red-500 rounded">
          <div class="rounded-t">
            <img class="object-cover h-64 w-96 rounded-t" src="${listing.media}" />
          </div> 
          <div class="ml-4 inline-block">
            <p class="text-lime-500">${listing.title}</p>
            <p>Ends at ${listing.endsAt}</p>
          </div> 
        </a>`);
    });
  }
}
