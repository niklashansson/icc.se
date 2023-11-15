import { queryElements } from '$utils/queryElements';

import type JQuery from '../node_modules/@types/jquery';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const nestTargets: HTMLDivElement[] = queryElements('[logos-block-element="nest-target"]');
  if (!nestTargets.length) return;

  nestTargets.forEach((nestTarget) => {
    const { slug, className } = nestTarget.dataset;

    if (!slug || !className) return;

    loadElement(nestTarget, slug, className);
  });
});

function loadElement(nestTarget: HTMLDivElement, sourceSlug: string, className: string) {
  jQuery(function () {
    jQuery(nestTarget).load(`/medlemmar-logotypblock/${sourceSlug} .${className}`);
  });
}
