import {
  gallaryListEl,
  modalEl,
  imgEl,
  closeBtnEl,
  overlayEl,
} from './get-elements-from-DOM.js';

export default function onArrowLeftPress() {
  if (
    imgEl.src ===
    gallaryListEl.firstElementChild.firstElementChild.firstElementChild.dataset
      .source
  ) {
    imgEl.src = `${gallaryListEl.lastElementChild.firstElementChild.firstElementChild.dataset.source}`;
  } else {
    const thisEl = document.querySelector(`[data-source="${imgEl.src}"]`);
    imgEl.src = `${thisEl.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.dataset.source}`;
  }
}
