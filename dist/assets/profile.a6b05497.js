import{h as a,b as r,l as o}from"./index.7519c7b4.js";const s=()=>{const e=new URL(window.location);return Object.fromEntries(e.searchParams)};function d(e){const n=document.getElementById("profileContainer");n.innerHTML="",e&&(n.innerHTML=`
    <div id="profileCard">
        <img src="${e.avatar}" alt="profile avatar">
        <h2>${e.name}</h2>
        <p>current credit: ${e.credits}</p>
    </div>
    <div id="wins">
        <div>${e.wins}</div>
    </div>
    `)}function c(e){const n=document.getElementById("listingContainer");n.innerHTML="",e&&e.forEach(t=>{n.innerHTML+=`
        <a href="/src/html/listing/listing.html?id=${t.id}" id="listingCard">
            ${t.media.map(i=>`<img src="${i}" alt=${t.description}`)}
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <a href="updateListing.html?id=${t.id}">update listing</a>
        </a>
    `})}async function l(){try{const e={method:"GET",headers:a("application/json"),body:JSON.stringify()},n=s().name,t=await fetch(`${r}/${n}?_listings=true`,e);if(t.ok){const i=await t.json();d(i),c(i.listings)}else alert("please log in")}catch(e){console.log(e)}}l();document.getElementById("update").addEventListener("click",e=>{e.preventDefault();const t=o("profile").name;location.href=`/src/html/updateAvatar/updateAvatar.html?name=${t}`});
