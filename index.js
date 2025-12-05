import{a as q,S as E,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const P="53508808-db25438414f7039efcc38d51b",M="https://pixabay.com/api/";async function p(e,o=1){const a={key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await q.get(M,{params:a})).data}catch(n){throw console.error("Error in getImagesByQuery:",n),n}}let i=null;function h(e){const o=document.querySelector(".gallery"),a=e.map(({webformatURL:n,largeImageURL:t,tags:r,likes:c,views:v,comments:S,downloads:w})=>`
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
              <span class="info-value">${v}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="info-value">${S}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${w}</span>
            </p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",a),i?i.refresh():i=new E(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function B(){const e=document.querySelector(".gallery");e&&(e.innerHTML=""),i&&(i.destroy(),i=null)}function y(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function b(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function u(){const e=document.querySelector(".load-more");e&&e.classList.remove("hidden")}function d(){const e=document.querySelector(".load-more");e&&e.classList.add("hidden")}function R(){const e=document.querySelector(".gallery");if(!e||e.children.length===0)return;const o=e.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const C=document.querySelector(".form");let s,L="";const m=15;let f=0,g=0;C.addEventListener("submit",I);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".load-more");e&&e.addEventListener("click",$)});async function I(e){e.preventDefault();const a=e.target.elements.searchQuery.value.trim();if(!a){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}B(),s=1,L=a,d(),y();try{const n=await p(a,s);await H(n)}catch(n){O(n)}finally{b()}}async function $(){try{s++,y(),d();const e=await p(L,s),o=document.querySelectorAll(".gallery-item").length;h(e.hits),R(o);const a=Math.ceil(f/m);s<a?u():(d(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.error("Error loading more images:",e),s--,s>=1&&u(),l.error({title:"Error",message:"Failed to load more images. Please try again.",position:"topRight"})}finally{b()}}function H(e){const o=e.hits;if(f=e.totalHits,g=Math.ceil(e.totalHits/m),o.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o),g>m&&u(),l.success({title:"Success",message:`Hooray! We found ${f} images.`,position:"topRight"})}function O(e){console.error("Error:",e),l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}
//# sourceMappingURL=index.js.map
