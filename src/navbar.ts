import { setNavDropdownsReturnLink } from '$utils/navbar/setNavDropdownsReturnLink';
import { setNavMenuToWindowHeight } from '$utils/navbar/setNavMenuToWindowHeight';

window.Webflow = window.Webflow || [];
window.Webflow.push(async () => {
  // select essential navbar elements
  const banner = <HTMLDivElement>document.querySelector('[navbar-element="component"]');
  const menu = <HTMLMenuElement>document.querySelector('[navbar-element="menu"]');
  const toggleMenuBtn = document.querySelector('[navbar-element="button"]') as HTMLButtonElement;
  if (!banner || !menu || !toggleMenuBtn) return;

  // run navbar mobile functionalities on smaller breakpoints
  if (window.innerWidth <= 991) navbarMobile();

  function navbarMobile() {
    // get return links from menu items' dropdown submenus
    const returnLinks: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      '[navbar-element="close-dropdown"]'
    );

    toggleMenuBtn.addEventListener('click', () => {
      setNavMenuToWindowHeight(menu, banner);

      if (!returnLinks.length) return;
      setNavDropdownsReturnLink(returnLinks);
    });
  }
});
