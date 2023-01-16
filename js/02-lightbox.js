import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulContainerEl = document.querySelector('.gallery');

const makeMarkup = function () {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
  });
  return markup.join('');
};

ulContainerEl.insertAdjacentHTML('afterbegin', makeMarkup());

ulContainerEl.addEventListener('click', e => {
  e.preventDefault();
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
