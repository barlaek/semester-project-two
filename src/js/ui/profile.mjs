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

export function listingCard(listing) {
  const listingContainer = document.getElementById("listingContainer");
  listingContainer.innerHTML = "";
  if (listing) {
    listingContainer.innerHTML = `
        <a href="/html/updateListing.html?id=${listing.id}" id="listingCard">
            ${listing.media.map((img) => {
              return `<img src="${img}" alt=${listing.description}`;
            })}
            <h3>${listing.title}</h3>
            <p>${listing.description}</p>
        </a>
    `;
  }
}
