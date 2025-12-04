import{a as w,S as M,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const q="53508808-db25438414f7039efcc38d51b",P="https://pixabay.com/api/";async function p(e,o=1){const s={key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await w.get(P,{params:s})).data}catch(n){throw console.error("Error in getImagesByQuery:",n),n}}let i=null;function h(e){const o=document.querySelector(".gallery"),s=e.map(({webformatURL:n,largeImageURL:t,tags:r,likes:c,views:L,comments:v,downloads:S})=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a href="${t}" class="gallery-link">
            <img src="${n}" alt="${r}" loading="lazy" class="gallery-image" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span class="info-value">${c}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span class="info-value">${L}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="info-value">${v}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${S}</span>
            </p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new M(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function E(){const e=document.querySelector(".gallery");e&&(e.innerHTML=""),i&&(i.destroy(),i=null)}function y(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function g(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function d(){const e=document.querySelector(".load-more");e&&e.classList.remove("hidden")}function f(){const e=document.querySelector(".load-more");e&&e.classList.add("hidden")}const B=document.querySelector(".form");let a,b="";const m=15;let u=0;B.addEventListener("submit",$);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".load-more");e&&e.addEventListener("click",O)});function $(e){e.preventDefault();const s=e.target.elements.searchQuery.value.trim();if(!s){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}E(),a=1,b=s,f(),y(),p(s,a).then(R).catch(I).finally(g)}async function O(){try{a++,y(),f();const e=await p(b,a);h(e.hits);const o=Math.ceil(u/m);a<o?d():(f(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.error("error loading more images:",e),a--,d()}finally{console.log("We're sorry, but you've reached the end of search results."),g()}}function R(e){const o=e.hits;if(u=Math.ceil(e.totalHits/m),o.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o),u>m&&d(),l.success({title:"Success",message:`Hooray! We found ${u} images.`,position:"topRight"})}function I(e){console.error("Error:",e),l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}
//# sourceMappingURL=index.js.map
