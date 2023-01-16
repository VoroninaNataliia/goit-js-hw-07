import { galleryItems } from './gallery-items.js';

// Change code below this line

const divContainerEl = document.querySelector('.gallery');

divContainerEl.style.display = 'flex';
divContainerEl.style.flexWrap = 'wrap';
divContainerEl.style.gap = '20px';

const makeMarkup = function () {
  const markup = galleryItems.map(item => {
    return `
       <div class="gallery__item">
         <a href="#" class="gallery__link">
          <img 
            src="${item.preview}"
            data-banner-url="${item.original}"
            alt="${item.description}"
            loadng = "lazy"
          />
         </a>
       </div>
      `;
  });
  return markup.join('');
};

divContainerEl.insertAdjacentHTML('afterbegin', makeMarkup());

divContainerEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.bannerUrl}" width = "800", heigth = "600">
  `);

  instance.show();

  divContainerEl.instance = instance;
  divContainerEl.addEventListener('keydown', keydownCallback);
}

const keydownCallback = e => {
  console.log(e);
  if (e.code === 'Escape') {
    divContainerEl.instance.close();
    delete divContainerEl.instance;
    divContainerEl.removeEventListener('keydown', keydownCallback);
  }
};
