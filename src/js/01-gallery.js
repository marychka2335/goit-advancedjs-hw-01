import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createMarkupImages(galleryItems);

function createMarkupImages(array) {
  return array.map((element) => {
    return `<li><a class="gallery__item" href="${element.original}">
    <img class="gallery__image" src="${element.preview}" alt="${element.description}"/>
  </a></li>`
    }).join('')
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 } );
