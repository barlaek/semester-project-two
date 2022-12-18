/**
 * takes an
 * @param {object} profile
 * and returns an html rendered object
 * based on the profile
 */

export function viewProfile(profile) {
  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = "";
  if (profile) {
    profileContainer.innerHTML = `
    <div id="profileCard">
        <img src="${profile.avatar}" alt="profile avatar">
        <h2>${profile.name}</h2>
        <p>current credit: ${profile.credits}</p>
    </div>
    <div id="wins">
        <div>${profile.wins}</div>
    </div>
    `;
  }
}

/**
 * takes an
 * @param {array} listings
 * of objects and renders the objects into html
 */

export function listingCard(listings) {
  const listingContainer = document.getElementById("listingContainer");
  listingContainer.innerHTML = "";
  if (listings) {
    listings.forEach((listing) => {
      listingContainer.innerHTML += `
        <a href="/src/html/listing/listing.html?id=${
          listing.id
        }" id="listingCard">
            ${listing.media.map((img) => {
              return `<img src="${img}" alt=${listing.description}`;
            })}
            <h3>${listing.title}</h3>
            <p>${listing.description}</p>
            <a href="updateListing.html?id=${listing.id}">update listing</a>
        </a>
    `;
    });
  }
}
