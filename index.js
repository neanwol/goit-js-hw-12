import{a as q,S as P,i}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const I="53508808-db25438414f7039efcc38d51b",E="https://pixabay.com/api/";async function g(e,o=1){const r={key:I,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await q.get(E,{params:r})).data}catch(s){throw console.error("Error in getImagesByQuery:",s),s}}let l=null;function p(e){const o=document.querySelector(".gallery"),r=e.map(({webformatURL:s,largeImageURL:t,tags:a,likes:c,views:S,comments:v,downloads:w})=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a href="${t}" class="gallery-link">
            <img src="${s}" alt="${a}" loading="lazy" class="gallery-image" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span class="info-value">${c}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span class="info-value">${S}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="info-value">${v}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${w}</span>
            </p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new P(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function M(){const e=document.querySelector(".gallery");e&&(e.innerHTML=""),l&&(l.destroy(),l=null)}function h(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function y(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function f(){const e=document.querySelector(".load-more");e&&e.classList.remove("hidden")}function d(){const e=document.querySelector(".load-more");e&&e.classList.add("hidden")}const B=document.querySelector(".form"),m=document.querySelector(".load-more");let n=1,b="";const L=15;let u=0;B.addEventListener("submit",R);m&&m.addEventListener("click",H);async function R(e){e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}M(),n=1,b=r,d(),h();try{const s=await g(r,n);await $(s)}catch(s){A(s)}finally{y()}}async function H(){try{n++,h(),d();const e=await g(b,n),o=document.querySelectorAll(".gallery-item").length;p(e.hits),O(o),e.totalHits&&(u=e.totalHits);const r=Math.ceil(u/L);n<r?f():(d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.error("Error loading more images:",e),n--,n>=1&&f(),i.error({title:"Error",message:"Failed to load more images. Please try again.",position:"topRight"})}finally{y()}}function $(e){const o=e.hits;u=e.totalHits;const r=Math.ceil(u/L);if(o.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(o),n<r?f():(d(),o.length>0&&i.info({title:"Info",message:"All search results have been loaded.",position:"topRight"})),i.success({title:"Success",message:`Hooray! We found ${u} images.`,position:"topRight"})}function A(e){console.error("Error:",e),i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}function O(e){const o=document.querySelectorAll(".gallery-item");if(o.length<=e)return;const r=Array.from(o).slice(e);if(r.length===0)return;const t=r[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
