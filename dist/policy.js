"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/queryElement.ts
  function queryElement(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  // src/policy.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    const dataEl = queryElement("#policy-data");
    if (!dataEl)
      return;
    const { type, externalLink, pdfLink } = dataEl.dataset;
    switch (type) {
      case "(1) Egen sida":
        return;
      case "(2) L\xE4nk som \xF6ppnas i en ny flik":
        externalLink ? window.open(externalLink, "_blank") : window.history.back();
      case "(3) PDF som \xF6ppnas i en ny flik":
        pdfLink ? window.open(pdfLink, "_blank") : window.history.back();
    }
  });
})();
//# sourceMappingURL=policy.js.map
