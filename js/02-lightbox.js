import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const itemCards = createItemCards(galleryItems);
// ______________________________________________________________

gallery.insertAdjacentHTML("beforeend", itemCards);

gallery.addEventListener("click", onGalleryItemsClick);

// -----------------------------------------------------------------
function createItemCards(Items) {
  return Items.map(({ preview, original, description }) => {
    return `
   	<a class="gallery__item" href="${original}">
  	<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
  }).join("");
}

function onGalleryItemsClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  console.log(" evt", evt.target);
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
