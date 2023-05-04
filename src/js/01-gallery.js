import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', itemsMarkup);

const galleryLightBox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.style.listStyle = 'none';

console.log(galleryItems);
