import closeModal from './close-modal.js';
import onArrowRightPress from './on-arrow-right-press.js';
import onArrowLeftPress from './on-arrow-left-press.js';

export default function keyboardNavigation(event) {
  if (event.code === 'Escape') {
    closeModal();
  } else if (event.code === 'ArrowRight') {
    onArrowRightPress();
  } else if (event.code === 'ArrowLeft') {
    onArrowLeftPress();
  } else return;
}
