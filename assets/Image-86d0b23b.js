import{r as c,j as u}from"./index-eab3bf2e.js";import{b as o}from"./index-9396308a.js";function f({srcset:a,alt:r,className:n,onError:d}){const[t,s]=c.useState(!1);function m(e){document.addEventListener("DOMContentLoaded",e),(document.readyState==="interactive"||document.readyState==="complete")&&(document.removeEventListener("DOMContentLoaded",e),e())}function i(e){e.target.setAttribute("src","")}return m(()=>{t||s(!t)}),a&&u.jsx("img",{onError:d||i,className:`${n} ${t?"":"bg-slate-400 animate-pulse"}`,src:t?a:null,loading:"lazy",alt:r||o()},o())}export{f as I};
//# sourceMappingURL=Image-86d0b23b.js.map
