/**
 * @description closes modal element by removing 'is-active' class
 * @param {HTMLElement} modalElement
 * @param {EventTarget} eventTarget destroy when closing
 * @param {HTMLElement[]} closeButtons removes event listener from all buttons
 * @returns nothing
 */

export function closeModal(modalElement: HTMLElement, closeButtons: EventTarget[]) {
  modalElement.setAttribute('modal-active', '');
  closeButtons.forEach((btn) => btn.removeEventListener('click', null));
}
