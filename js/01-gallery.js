import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery")
const items = galleryItems
    .map(e => `<div class="gallery__item">
  <a class="gallery__link" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</div>`)
    .join("");
gallery.insertAdjacentHTML("afterbegin", items)
gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return;
    }
    console.log(e.target.dataset.source)
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" >
`)

instance.show()
});

