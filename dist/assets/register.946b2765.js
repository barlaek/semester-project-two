import{h as t,c as s}from"./index.e3766540.js";async function a(r){try{const e={method:"POST",headers:t("application/json"),body:JSON.stringify(r)};(await fetch(`${s}`,e)).ok?window.location="/src/html/login.html":alert("oops! something went wrong. this user might already exist or please provide a valid email address ending in @noroff.no or @stud.noroff.no")}catch(e){console.log(e)}}document.getElementById("registrationForm").addEventListener("submit",r=>{r.preventDefault();const e=r.target,o={name:e.registerName.value,avatar:e.newAvatar.value,email:e.registerEmail.value,password:e.registerPassword.value};a(o)});
