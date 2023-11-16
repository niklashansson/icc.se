import { restartWebflow } from '@finsweet/ts-utils';

import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  const loadBtn = queryElement('.w-pagination-next');
  if (!loadBtn) return;

  loadBtn.addEventListener('click', () => {
    restartWebflow();
  });
});
