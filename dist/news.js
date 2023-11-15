"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/queryElement.ts
  function queryElement(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  // src/news.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    const dataEl = queryElement("#post-format");
    if (!dataEl)
      return;
    const { format, pdfUrl, url } = dataEl.dataset;
    switch (format) {
      case "L\xE4nk":
        if (url) {
          window.location.href = url;
          break;
        }
      case "L\xE4nk - Ny flik":
        if (url) {
          window.open(url, "_blank");
          break;
        }
      case "PDF - Policy":
        if (pdfUrl) {
          window.open(pdfUrl, "_blank");
          break;
        }
      default:
        return;
    }
  });
})();
//# sourceMappingURL=news.js.map
