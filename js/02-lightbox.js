import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery")
const items = galleryItems
    .map(e => `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
</a>`)
    .join("");
gallery.insertAdjacentHTML("afterbegin", items)
    
    let lightbox = new SimpleLightbox('.gallery a',{captionsData: `alt`, captionDelay:250});