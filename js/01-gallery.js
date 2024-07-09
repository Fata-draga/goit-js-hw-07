import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery");

  if (!galleryContainer) {
    console.error("Gallery container not found");
    return;
  }

  function createGalleryItems(items) {
    return items
      .map(({ preview, original, description }) => {
        return `
        <li class="gallery_item">
          <a class="gallery_link" href="${original}">
            <img class="gallery_image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}" />
          </a>
        </li>`;
      })
      .join("");
  }

  galleryContainer.innerHTML = createGalleryItems(galleryItems);

  galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();

    const isGalleryImage = event.target.classList.contains("gallery_image");

    if (!isGalleryImage) {
      return;
    }

    const source = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${source}" width="800" height="600">
    `);

    instance.show();
  });
});
