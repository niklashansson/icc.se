import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const dataEl = queryElement('#post-format');
  if (!dataEl) return;

  const { format, pdfUrl, url } = dataEl.dataset;

  switch (format) {
    case 'Länk':
      if (url) {
        window.location.href = url;
        break;
      }

    case 'Länk - Ny flik':
      if (url) {
        window.open(url, '_blank');
        break;
      }

    case 'PDF - Policy':
      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
        break;
      }
    default:
      return;
  }
});
