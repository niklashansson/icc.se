import type { CMSList } from '@finsweet/attributes-cmscore/types';
import { restartWebflow } from '@finsweet/ts-utils';

import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsload',
    (listInstances: CMSList[]) => {
      // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
      const [listInstance] = listInstances;

      const loadBtn = queryElement('.w-pagination-next');

      loadBtn?.addEventListener('click', () => {
        restartWebflow();
      });
    },
  ]);
});
