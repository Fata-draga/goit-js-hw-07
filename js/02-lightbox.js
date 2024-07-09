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
                 alt="${description}" />
          </a>
        </li>`;
      })
      .join("");
  }

  galleryContainer.innerHTML = createGalleryItems(galleryItems);

  function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    script.onerror = function () {
      console.error("Error loading script:", src);
    };
    document.head.appendChild(script);
  }

  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.js",
    () => {
      if (typeof SimpleLightbox !== "undefined") {
        const lightbox = new SimpleLightbox(".gallery a", {
          captionsData: "alt",
          captionDelay: 250,
        });
      } else {
        console.error("SimpleLightbox is not defined");
      }
    }
  );
});
