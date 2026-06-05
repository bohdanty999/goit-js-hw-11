import{a as d,S as f,i}from"./assets/vendor-BezXTN6Z.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const g="56165322-4eccb7c267e8fea85df72b379",p=e=>d.get("https://pixabay.com/api/",{params:{key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data),u=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=new f(".gallery a",{});function h(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <ul class="gallery-item-desc">
        <li>Likes <p>${e.likes}</p></li>
        <li>Views <p>${e.views}</p></li>
        <li>Comments <p>${e.comments}</p></li>
        <li>Downloads <p>${e.downloads}</p></li>
      </ul>
    </li>
  `}function L(e){return e.map(h).join("")}function b(e){u.insertAdjacentHTML("beforeend",L(e)),y.refresh()}function w(){u.innerHTML=""}function v(){m.classList.add("loader--visible")}function l(){m.classList.remove("loader--visible")}const c=document.querySelector(".form");c.addEventListener("submit",e=>{e.preventDefault();const o=c.querySelector('[name="search-text"]').value.trim();if(!o){i.warning({message:"Please enter a search term."});return}w(),v(),p(o).then(s=>{if(l(),s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s.hits)}).catch(()=>{l(),i.error({message:"Something went wrong. Please try again."})})});
//# sourceMappingURL=index.js.map
