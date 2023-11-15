"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/queryElements.ts
  function queryElements(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  // src/logosBlock.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    const nestTargets = queryElements('[logos-block-element="nest-target"]');
    if (!nestTargets.length)
      return;
    nestTargets.forEach((nestTarget) => {
      const { slug, className } = nestTarget.dataset;
      if (!slug || !className)
        return;
      loadElement(nestTarget, slug, className);
    });
  });
  function loadElement(nestTarget, sourceSlug, className) {
    jQuery(function() {
      jQuery(nestTarget).load(`/medlemmar-logotypblock/${sourceSlug} .${className}`);
    });
  }
})();
//# sourceMappingURL=logosBlock.js.map
