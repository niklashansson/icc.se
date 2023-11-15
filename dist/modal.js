"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/queryElements.ts
  function queryElements(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  // src/utils/modal/closeModal.ts
  function closeModal(modalElement, closeButtons) {
    modalElement.setAttribute("modal-active", "");
    closeButtons.forEach((btn) => btn.removeEventListener("click", null));
  }

  // src/utils/modal/openModal.ts
  function openModal(modalElement, modalContentIndex) {
    const closeButtons = queryElements('[modal-element="close-btn"]', modalElement);
    if (!closeButtons.length)
      return;
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        closeModal(modalElement, closeButtons);
      });
    });
    modalElement.setAttribute("modal-active", `${modalContentIndex}`);
  }

  // src/utils/queryElement.ts
  function queryElement(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  // src/modal.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    const headers = queryElements("head");
    headers.forEach((head) => {
      const windowHeight = `${window.innerHeight}`;
      head.style.height = windowHeight;
    });
    const modalElement = queryElement('[modal-element="component"]');
    const openSearchModalBtns = queryElements('a[href="#modal-search"]').map((el) => {
      return { el, i: 1 };
    });
    const openMemberApplicationBtns = queryElements('a[href="#modal-application"]').map((el) => {
      return { el, i: 2 };
    });
    const allOpenBtns = [...openSearchModalBtns, ...openMemberApplicationBtns];
    if (!allOpenBtns.length || !modalElement)
      return;
    allOpenBtns.forEach(({ el, i }) => {
      el.setAttribute("href", "#");
      el.addEventListener("click", () => {
        openModal(modalElement, i);
      });
    });
  });
})();
//# sourceMappingURL=modal.js.map
