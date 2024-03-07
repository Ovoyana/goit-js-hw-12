'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images, gallery) {
  // Чи є зображення?
  if (images.length === 0) {
    // Якщо мвсив пустий щтримуємо повідотлення
    iziToast.error({
      title: '',
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
      position: 'topRight',
    });
    return;
  }

  // Створюємо розмітку
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
                 <a class="gallery-link" href="${largeImageURL}">
                     <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                 </a>
                 <div class="description">
                     <div class="about">
                         <p class="position">Likes</p>
                         <p class="quantity">${likes}</p>
                     </div>
                     <div class="about">
                         <p class="position">Views</p>
                         <p class="quantity">${views}</p>
                     </div>
                     <div class="about">
                         <p class="position">Comments</p>
                         <p class="quantity">${comments}</p>
                     </div>
                     <div class="about">
                         <p class="position">Downloads</p>
                         <p class="quantity">${downloads}</p>
                     </div>
                 </div>
             </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
export function clearGallery(gallery, lightbox) {
  gallery.innerHTML = '';
  if (lightbox) {
    lightbox.refresh();
  }
}
