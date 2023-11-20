import { restartWebflow } from '@finsweet/ts-utils';

import { queryElement } from '$utils/queryElement';

import type { CMSList } from '../node_modules/@finsweet/attributes-cmscore/types/CMSList';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  window.fsAttributes.push([
    'cmsload',
    (listInstances: CMSList[]) => {
      const [listInstance] = listInstances;
      listInstance.restartWebflow = true;
    },
  ]);
});
