export let tagsString = '';
export function createTagsString({ preview, original, description }) {
  tagsString += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</li>`;
}
