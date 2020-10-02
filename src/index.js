import images from './js/gallery-items.js';
import {
  gallaryListEl,
  modalEl,
  imgEl,
  closeBtnEl,
  overlayEl,
} from './js/get-elements-from-DOM.js';
import { createTagsString, tagsString } from './js/create-murkup.js';
import onGallaryClick from './js/on-gallary-click.js';

images.forEach(createTagsString);
gallaryListEl.insertAdjacentHTML('afterbegin', tagsString);

gallaryListEl.addEventListener('click', onGallaryClick);
