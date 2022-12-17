export async function viewProfile(profile) {
    const profileContainer = document.getElementById("profileContainer")
    profileContainer.innerHTML = ""
    if(profile) {
        profileContainer.innerHTML = `
        <h2>${profile.name}</h2>
        `
    }
}