window.Webflow = window.Webflow || [];

const LOCALE = 'se-SV';

window.Webflow.push(() => {
  // select all date strings with attribute [localize-date]
  const elementsToLocalize = document.querySelectorAll('[localize-date]');

  elementsToLocalize.forEach((el) => {
    const dateString = el.textContent;
    if (!dateString) return;

    const timestamp = Date.parse(dateString);
    if (!timestamp || Number.isNaN(timestamp)) return;

    const localized = localizeDate(timestamp);
    el.textContent = localized;
  });
});

const formatter = new Intl.DateTimeFormat(LOCALE, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function localizeDate(timestamp: number) {
  return formatter.format(timestamp);
}
