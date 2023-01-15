import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", createGalleryClick);

function createGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
    
    
`);

  instance.show(evt);
  gallery.addEventListener("keydown", evt => {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}

const renderList = p =>
  p.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`,
    ""
  );

const insertListItems = string => {
  gallery.insertAdjacentHTML("beforeend", string);
};

insertListItems(renderList(galleryItems));

// instance.show();
