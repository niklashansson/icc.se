import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const dataEl = queryElement('#post-format');
  if (!dataEl) return;

  const { format, pdfUrl } = dataEl.dataset;

  switch (format) {
    case 'PDF':
      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
        break;
      }
    default:
      return;
  }
});
