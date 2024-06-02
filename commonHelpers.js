import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function l(t){c.error({icon:"",backgroundColor:"#ef4040",position:"topRight",message:"Oh, shit! Type something",messageColor:"white"})}function u(t){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"44041025-2e091a4b621ea033778029d2c",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${r}?${s}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(e.hits.length===0)c.error({icon:"",backgroundColor:"#ef4040",position:"topRight",message:"&#11198; Sorry, there are no images matching your search query. Please, try again!",messageColor:"white"});else return e.hits}).catch(e=>console.log(e))}function f(t){const r=document.querySelector(".gallery");r.innerHTML=t.map(s=>h(s)).join(""),lightbox?lightbox.refresh():lightbox=new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"})}function h(t){return`
    <div class="photo-card">
      <a class="link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
        <div class="info">
        <li><h3 class="info-title">Likes</h3><p class="info-text">${t.likes}</p></li>
        <li><h3 class="info-title">Views</h3><p class="info-text">${t.views}</p></li>
        <li><h3 class="info-title">Comments</h3><p class="info-text">${t.comments}</p></li>
        <li><h3 class="info-title">Downloads</h3><p class="info-text">${t.downloads}</p></li>
      </div>
      </a>
    </div>
  `}function d(){const t=document.querySelector(".loader");t.style.display="block"}function m(){const t=document.querySelector(".loader");t.style.display="none"}function p(){const t=document.querySelector(".gallery");t.innerHTML=""}const y=document.querySelector(".form"),a=document.querySelector(".input");y.addEventListener("submit",t=>{t.preventDefault(),p();const r=a.value.trim();if(!r){l();return}d(),a.value="",u(r).then(s=>{f(s)}).catch(s=>{l(message)}).finally(()=>{m()})});
//# sourceMappingURL=commonHelpers.js.map
