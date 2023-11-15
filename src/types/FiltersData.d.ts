interface FilterData {
  /**
   * The elements that filter by the `filterKeys` of this filter.
   */
  elements: FilterElement[];

  /**
   * The `filterKey` indentifiers.
   */
  originalFilterKeys: string[];

  /**
   * The normalized `filterKey` indentifiers.
   */
  filterKeys: string[];

  /**
   * The current active values.
   */
  values: Set<string>;

  /**
   * The matching rule.
   */
  match?: 'any' | 'all';

  /**
   * A specific filtering mode.
   */
  mode?: 'range';

  /**
   * Defines if matching `CMSItemProps` should be highlighted.
   */
  highlight: boolean;

  /**
   * Defines the Highlight CSS Class to add to highlight targets.
   */
  highlightCSSClass: string;

  /**
   * Defines an override for the tag format of the filter.
   */
  tagFormat?: 'category';

  /**
   * Defines an override for the identifier display in the `category` tag format.
   */
  tagCategory: string | null;
}

/**
 * Filters
 */
interface FilterElement {
  /**
   * Defines the element that holds the filter value.
   */
  element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

  /**
   * The filter value.
   */
  value: string;

  /**
   * The Form Field type of the element.
   */
  type: string;

  /**
   * The amount of results for this particular element.
   */
  resultsCount: number;

  /**
   * An text element where to display the `resultsCount`.
   */
  resultsElement?: HTMLElement | null;

  /**
   * Defines if the element should be hidden when there are no `resultsCount`.
   */
  hideEmpty?: HTMLElement;

  /**
   * Defines if the element is currently hidden.
   */
  hidden: boolean;

  /**
   * Defines a filtering mode for the element's properties.
   */
  mode?: 'from' | 'to';

  /**
   * Defines the Active CSS Class to add when the element is active.
   */
  activeCSSClass: string;

  /**
   * Defines the debouncing for this specific element.
   */
  debouncing: number;
}
