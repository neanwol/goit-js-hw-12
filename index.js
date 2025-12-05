import{a as q,S as P,i}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const E="53508808-db25438414f7039efcc38d51b",M="https://pixabay.com/api/";async function g(e,o=1){const r={key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await q.get(M,{params:r})).data}catch(a){throw console.error("Error in getImagesByQuery:",a),a}}let l=null;function p(e){const o=document.querySelector(".gallery"),r=e.map(({webformatURL:a,largeImageURL:t,tags:s,likes:c,views:L,comments:S,downloads:w})=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a href="${t}" class="gallery-link">
            <img src="${a}" alt="${s}" loading="lazy" class="gallery-image" />
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
              <span class="info-value">${S}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${w}</span>
            </p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new P(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function B(){const e=document.querySelector(".gallery");e&&(e.innerHTML=""),l&&(l.destroy(),l=null)}function h(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function y(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function d(){const e=document.querySelector(".load-more");e&&e.classList.remove("hidden")}function u(){const e=document.querySelector(".load-more");e&&e.classList.add("hidden")}function R(){const e=document.querySelector(".gallery");if(!e||e.children.length===0)return;const o=e.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const I=document.querySelector(".form"),m=document.querySelector(".load-more");let n,b="";const v=15;let f=0;I.addEventListener("submit",$);m&&m.addEventListener("click",C);async function $(e){e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}B(),n=1,b=r,u(),h();try{const a=await g(r,n);await H(a)}catch(a){O(a)}finally{y()}}async function C(){try{n++,h(),u();const e=await g(b,n),o=document.querySelectorAll(".gallery-item").length;p(e.hits),R(o);const r=Math.ceil(f/v);n<r?d():(u(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.error("Error loading more images:",e),n--,n>=1&&d(),i.error({title:"Error",message:"Failed to load more images. Please try again.",position:"topRight"})}finally{y()}}function H(e){const o=e.hits;f=e.totalHits;const r=Math.ceil(e.totalHits/v);if(o.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(o),n<r?d():(u(),i.info({title:"Info",message:"All search results have been loaded.",position:"topRight"})),i.success({title:"Success",message:`Hooray! We found ${f} images.`,position:"topRight"})}function O(e){console.error("Error:",e),i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}
//# sourceMappingURL=index.js.map
