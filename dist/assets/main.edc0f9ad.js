import{h as a,A as l}from"./headers.e04ea350.js";const r=document.getElementById("listingsContainer");function i(e){r.innerHTML="",e&&e.forEach(t=>r.innerHTML+=`<a href="/src/html/listing/listing.html?id=${t.id}" class="w-96 h-96 bg-red-500 rounded">
          <div>
            <img class="object-cover h-64 w-96" src="${t.media}" />
          </div>  
          <p class="text-lime-500">${t.title}</p>
          <p>Ends at ${t.endsAt}</p>
        </a>`)}function d(e){const t=document.getElementById("search");t.onkeyup=function(n){const o=n.target.value.trim().toLowerCase(),s=e.filter(c=>{if(c.title.toLowerCase().includes(o)||c.tags.toString().toLowerCase().includes(o))return!0});i(s)}}function f(e){const t=document.getElementById("filterRecent");t.onclick=function(){const n=new Date(new Date().setDate(new Date().getDate()-2)).toISOString(),o=e.filter(s=>s.created>=n);console.log(o),i(o)}}function u(e){const t=document.getElementById("filterPopular");t.onclick=function(){const n=e.filter(o=>o._count.bids>=10);console.log(n),i(n)}}async function g(){try{const e={method:"GET",headers:a("application/json"),body:JSON.stringify()},t=await fetch(`${l}?_active=true`,e);if(t.ok){const n=await t.json();i(n),d(n),f(n),u(n)}else alert("oops! something went wrong!")}catch(e){console.log(e)}}g();
