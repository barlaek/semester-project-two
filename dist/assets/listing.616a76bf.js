import{A as o,h as s}from"./headers.40e17284.js";function r(e){const t=document.getElementById("listingContainer");t.innerHTML="",e&&(t.innerHTML=`<div>
            <img src="${e.media}" alt="${e.description}">
            <div>
                <h2>${e.title}</h2>
                <p>${e.description}</p>
                <h4>current bids:</h4>
                ${e.bids.map(n=>`<p>bidder: ${n.bidderName} : amount: ${n.amount}</p>`)}
            </div>
        </div>`)}const a=document.location.search,i=new URLSearchParams(a),c=i.get("id"),d=new URL(`${o}/${c}`);async function m(){try{const e={method:"GET",headers:s("application/json"),body:JSON.stringify()},t=await fetch(`${d}?_seller=true&_bids=true`,e),n=await t.json();t.ok?r(n):alert("oops! something went wrong!")}catch(e){console.log(e)}}m();const p=document.location.search,l=new URLSearchParams(p),u=l.get("id"),h=`${o}/${u}/bids`;async function g(e){try{const t={method:"POST",headers:s("application/json"),body:JSON.stringify(e)};(await fetch(`${h}`,t)).ok?location.reload():alert("oops! something went wrong")}catch(t){console.log(t)}}document.getElementById("bidForm").addEventListener("submit",e=>{e.preventDefault();const t=e.target,n={amount:parseInt(t.placeBid.value)};g(n)});
