// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
         <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
       </li>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

