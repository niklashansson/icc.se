import { openModal } from '$utils/modal/openModal';
import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const headers = queryElements('head');

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

  if (!allOpenBtns.length || !modalElement) return;

  allOpenBtns.forEach(({ el, i }) => {
    el.setAttribute('href', '#');
    el.addEventListener('click', () => {
      openModal(modalElement, i);
    });
  });
});
