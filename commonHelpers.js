import{a as S,i as p,S as f}from"./assets/vendor-55779efa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function h(r,t){const a=`https://pixabay.com/api/?key=42540057-2630f4048f1d19f54e4f29ae2&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=15`;return(await S.get(a)).data}function b(r,t){if(r.length===0){p.error({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}const o=r.map(({webformatURL:a,largeImageURL:e,tags:s,likes:i,views:v,comments:q,downloads:w})=>`<li class="gallery-item">
                 <a class="gallery-link" href="${e}">
                     <img class="gallery-image" src="${a}" alt="${s}" />
                 </a>
                 <div class="description">
                     <div class="about">
                         <p class="position">Likes</p>
                         <p class="quantity">${i}</p>
                     </div>
                     <div class="about">
                         <p class="position">Views</p>
                         <p class="quantity">${v}</p>
                     </div>
                     <div class="about">
                         <p class="position">Comments</p>
                         <p class="quantity">${q}</p>
                     </div>
                     <div class="about">
                         <p class="position">Downloads</p>
                         <p class="quantity">${w}</p>
                     </div>
                 </div>
             </li>`).join("");t.insertAdjacentHTML("beforeend",o)}function L(r,t){r.innerHTML="",t&&t.refresh()}const m=document.querySelector(".input"),u=document.querySelector(".gallery"),$=document.querySelector(".form"),g=document.querySelector(".loader"),n=document.querySelector(".button-load"),d=document.querySelector(".loader-down");let l,c,y;function P(r){r.preventDefault(),g.style.display="block",y=m.value,c=1,L(u,l),h(y,c).then(t=>{const o=t.hits;b(o,u),g.style.display="none",m.value="",n.style.display="block",l=new f(".gallery a",{captionDelay:200,captionsData:"alt"}),l.refresh()}).catch(()=>{p.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"center"})})}function _(r){r.preventDefault(),c+=1,n.style.display="none",d.style.display="block",h(y,c).then(t=>{const o=t.hits;if(t.totalHits/15<c){n.style.display="none",d.style.display="none",p.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}b(o,u),n.style.display="block",d.style.display="none";const i=u.lastElementChild.getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"}),l=new f(".gallery a",{captionDelay:200,captionsData:"alt"}),l.refresh()}).catch(()=>{p.error({title:"",message:"Sorry, there was an error while fetching images. Please, try again later!",position:"topRight"})})}$.addEventListener("submit",P);n.addEventListener("click",_);
//# sourceMappingURL=commonHelpers.js.map
