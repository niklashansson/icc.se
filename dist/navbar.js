"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/.pnpm/@finsweet+ts-utils@0.39.2/node_modules/@finsweet/ts-utils/dist/helpers/simulateEvent.js
  var simulateEvent = (target, events) => {
    if (!Array.isArray(events))
      events = [events];
    const eventsSuccess = events.map((event) => target.dispatchEvent(new Event(event, { bubbles: true })));
    return eventsSuccess.every((success) => success);
  };

  // node_modules/.pnpm/@finsweet+ts-utils@0.39.2/node_modules/@finsweet/ts-utils/dist/webflow/closeDropdown.js
  var closeDropdown = (dropdownToggle, focusToggle = true) => {
    if (focusToggle)
      dropdownToggle.focus();
    simulateEvent(dropdownToggle, "w-close");
  };

  // src/utils/navbar/setNavDropdownsReturnLink.ts
  function setNavDropdownsReturnLink(returnLinks) {
    returnLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const dropdown = link.closest(".w-dropdown");
        if (!dropdown)
          return;
        e.preventDefault();
        closeDropdown(dropdown);
      });
    });
  }

  // src/utils/navbar/setNavMenuToWindowHeight.ts
  var setNavMenuToWindowHeight = (menu, banner) => {
    menu.style.height = `${window.innerHeight - banner.clientHeight}px`;
  };

  // src/navbar.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    const banner = document.querySelector('[navbar-element="component"]');
    const menu = document.querySelector('[navbar-element="menu"]');
    const toggleMenuBtn = document.querySelector('[navbar-element="button"]');
    if (!banner || !menu || !toggleMenuBtn)
      return;
    if (window.innerWidth <= 991)
      navbarMobile();
    function navbarMobile() {
      const returnLinks = document.querySelectorAll(
        '[navbar-element="close-dropdown"]'
      );
      toggleMenuBtn.addEventListener("click", () => {
        setNavMenuToWindowHeight(menu, banner);
        if (!returnLinks.length)
          return;
        setNavDropdownsReturnLink(returnLinks);
      });
    }
  });
})();
//# sourceMappingURL=navbar.js.map
