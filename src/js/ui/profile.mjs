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
    <div id="profileListing">
        <div>${profile.listings}</div>
    </div>
    <div id="wins">
        <div>${profile.wins}</div>
    </div>
    `;
  }
}

// export function listingCard(listing) {
//   const listingContainer = document.getElementById("listingContainer");
//   listingContainer.innerHTML = "";
//   if (listing) {
//     listingContainer.innerHTML = `
//         <div>${listing}</div>
//     `;
//   }
// }
