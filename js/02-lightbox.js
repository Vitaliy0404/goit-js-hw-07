import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createLi(galleryItems) {
    return galleryItems.reduce(
        (acc, { original, preview, description }) =>
        acc +
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        </li>`, ""
    );
}

const result = createLi(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", result);



const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


