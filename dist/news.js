"use strict";(()=>{function i(e,o){return(o||document).querySelector(e)}window.Webflow=window.Webflow||[];window.Webflow.push(async()=>{let e=i("#post-format");if(!e)return;let{format:o,policyUrl:t,url:n}=e.dataset;switch(o){case"L\xE4nk":if(n){window.location.assign(n);break}case"L\xE4nk i ny flik":if(n){window.open(n,"_blank");break}case"Policy":if(t){window.location.assign(t);break}default:return}});})();
