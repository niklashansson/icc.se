import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const dataEl = queryElement('#post-format');
  if (!dataEl) return;

  const { format, policyUrl, url } = dataEl.dataset;

  switch (format) {
    case 'Länk':
      if (url) {
        window.location.assign(url);
        break;
      }

    case 'Länk i ny flik':
      if (url) {
        window.open(url, '_blank');
        break;
      }

    case 'Policy':
      if (policyUrl) {
        window.location.assign(policyUrl);
        break;
      }

    default:
      return;
  }
});
