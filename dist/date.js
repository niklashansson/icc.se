"use strict";(()=>{window.Webflow=window.Webflow||[];var a="se-SV";window.Webflow.push(()=>{document.querySelectorAll("[localize-date]").forEach(o=>{let n=o.textContent;if(!n)return;let e=Date.parse(n);if(!e||Number.isNaN(e))return;let r=i(e);o.textContent=r})});var c=new Intl.DateTimeFormat(a,{year:"numeric",month:"long",day:"numeric"});function i(t){return c.format(t)}})();