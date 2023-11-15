import { queryElement } from '$utils/queryElement';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const dataEl = queryElement('#policy-data');
  if (!dataEl) return;

  const { type, externalLink, pdfLink } = dataEl.dataset;

  // policy types: page, external link, pdf
  switch (type) {
    case '(1) Egen sida':
      return;
    case '(2) Länk som öppnas i en ny flik':
      externalLink ? window.open(externalLink, '_blank') : window.history.back();
    case '(3) PDF som öppnas i en ny flik':
      pdfLink ? window.open(pdfLink, '_blank') : window.history.back();
  }
});
