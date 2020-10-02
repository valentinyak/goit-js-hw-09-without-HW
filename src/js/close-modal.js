import {
  gallaryListEl,
  modalEl,
  imgEl,
  closeBtnEl,
  overlayEl,
} from './get-elements-from-DOM.js';
import keyboardNavigation from './keyboard-navigation.js';

export default function closeModal() {
  closeBtnEl.removeEventListener('click', closeModal);
  overlayEl.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', keyboardNavigation);

  modalEl.classList.remove('is-open');
  imgEl.src = '';
}
