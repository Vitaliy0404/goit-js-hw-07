import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createLi(galleryItems) {
    return galleryItems.reduce(
        (acc, { original, preview, description }) =>
            acc +
            `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    , "");
}

const result = createLi(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", result);
galleryContainer.addEventListener("click", galleryOnClick);

function galleryOnClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,

        {
        onShow: () => {
        window.addEventListener("keydown", onKeydownEsc);
        },
        onClose: () => {
        window.removeEventListener("keydown", onKeydownEsc);
        },
        }
    );

    const onKeydownEsc = (event) => {
        if (event.code === "Escape") {
        instance.close();
        }
    };

    instance.show();
}