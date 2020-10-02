const gallaryListEl = document.querySelector('ul.js-gallery');
const modalEl = document.querySelector('div.js-lightbox');
const imgEl = document.querySelector('img.lightbox__image');
const closeBtnEl = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlayEl = document.querySelector('div.lightbox__overlay');

export { gallaryListEl, modalEl, imgEl, closeBtnEl, overlayEl };
