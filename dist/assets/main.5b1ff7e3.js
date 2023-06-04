import{h as a,A as l}from"./headers.e04ea350.js";const c=document.getElementById("listingsContainer");function i(e){const n=new Date(0);c.innerHTML="",e&&e.forEach(t=>c.innerHTML+=`<a href="/src/html/listing/listing.html?id=${t.id}" class="w-96 h-96 bg-white rounded border-solid border-1 shadow">
          <div class="rounded-t">
            <img class="object-cover h-64 w-96 rounded-t" src="${t.media}" />
          </div> 
          <div class="p-4">
            <p class="font-bold">${t.title}</p>
            <p>Ends at ${n.toDateString(t.endsAt)}</p>
          </div> 
        </a>`)}function d(e){const n=document.getElementById("search");n.onkeyup=function(t){const o=t.target.value.trim().toLowerCase(),s=e.filter(r=>{if(r.title.toLowerCase().includes(o)||r.tags.toString().toLowerCase().includes(o))return!0});i(s)}}function f(e){const n=document.getElementById("filterRecent");n.onclick=function(){const t=new Date(new Date().setDate(new Date().getDate()-2)).toISOString(),o=e.filter(s=>s.created>=t);console.log(o),i(o)}}function u(e){const n=document.getElementById("filterPopular");n.onclick=function(){const t=e.filter(o=>o._count.bids>=10);console.log(t),i(t)}}async function g(){try{const e={method:"GET",headers:a("application/json"),body:JSON.stringify()},n=await fetch(`${l}?_active=true`,e);if(n.ok){const t=await n.json();i(t),d(t),f(t),u(t)}else alert("oops! something went wrong!")}catch(e){console.log(e)}}g();
