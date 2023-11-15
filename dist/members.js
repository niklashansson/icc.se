"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/.pnpm/@finsweet+ts-utils@0.39.2/node_modules/@finsweet/ts-utils/dist/webflow/getSiteId.js
  var getSiteId = (page = document) => page.documentElement.getAttribute("data-wf-site");

  // node_modules/.pnpm/@finsweet+ts-utils@0.39.2/node_modules/@finsweet/ts-utils/dist/webflow/restartWebflow.js
  var restartWebflow = async (modules) => {
    const { Webflow } = window;
    if (!Webflow || !("destroy" in Webflow) || !("ready" in Webflow) || !("require" in Webflow))
      return;
    if (modules && !modules.length)
      return;
    if (!modules) {
      Webflow.destroy();
      Webflow.ready();
    }
    if (!modules || modules.includes("ix2")) {
      const ix2 = Webflow.require("ix2");
      if (ix2) {
        const { store, actions } = ix2;
        const { eventState } = store.getState().ixSession;
        const stateEntries = Object.entries(eventState);
        if (!modules)
          ix2.destroy();
        ix2.init();
        await Promise.all(stateEntries.map((state) => store.dispatch(actions.eventStateChanged(...state))));
      }
    }
    if (!modules || modules.includes("commerce")) {
      const commerce = Webflow.require("commerce");
      const siteId = getSiteId();
      if (commerce && siteId) {
        commerce.destroy();
        commerce.init({ siteId, apiUrl: "https://render.webflow.com" });
      }
    }
    if (modules?.includes("lightbox"))
      Webflow.require("lightbox")?.ready();
    if (modules?.includes("slider")) {
      const slider = Webflow.require("slider");
      if (slider) {
        slider.redraw();
        slider.ready();
      }
    }
    if (modules?.includes("tabs"))
      Webflow.require("tabs")?.redraw();
    return new Promise((resolve) => Webflow.push(() => resolve(void 0)));
  };

  // src/utils/queryElement.ts
  function queryElement(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  // src/members.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      "cmsload",
      (listInstances) => {
        const [listInstance] = listInstances;
        const loadBtn = queryElement(".w-pagination-next");
        loadBtn?.addEventListener("click", () => {
          restartWebflow();
        });
      }
    ]);
  });
})();
//# sourceMappingURL=members.js.map
