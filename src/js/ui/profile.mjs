export function viewProfile(profile) {
  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = "";
  if (profile) {
    const profileImg = document
      .getElementById("profileImg")
      .append(profile.avatar);

    const profileName = document
      .getElementById("profileName")
      .append(profile.name);
  }
}
