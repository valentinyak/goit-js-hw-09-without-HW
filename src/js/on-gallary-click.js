import {
  gallaryListEl,
  modalEl,
  imgEl,
  closeBtnEl,
  overlayEl,
} from './get-elements-from-DOM.js';
import closeModal from './close-modal.js';
import keyboardNavigation from './keyboard-navigation.js';

export default function onGallaryClick(event) {
  event.preventDefault();

  closeBtnEl.addEventListener('click', closeModal);
  overlayEl.addEventListener('click', closeModal);
  window.addEventListener('keydown', keyboardNavigation);

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalEl.classList.add('is-open');
  imgEl.src = `${event.target.dataset.source}`;
}
