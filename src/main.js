'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery  } from './js/render-functions.js';



const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const buttonLoad = document.querySelector('.button-load');
const loaderEnd = document.querySelector('.loader-down');
let lightbox;
let page;
let query;

function handleSearch(event) {
  event.preventDefault();
  loader.style.display = 'block';
query = input.value;

 page = 1;
 clearGallery (gallery, lightbox);

  searchImages(query, page)
    .then(data => {
      const images = data.hits;

      renderImages(images, gallery);

      loader.style.display = 'none';
      input.value = '';
      buttonLoad.style.display = 'block';

      lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 200,
        captionsData: 'alt',
    });
   lightbox.refresh();
    })
    .catch(() => {
      iziToast.error({
        title: '',
        message:
          'Sorry, there was an error while fetching images. Please, try again later!',
        position: 'center',
      });
 
    });
    
}

const img = '';
const options = '';


function searchMoreImages(event) {
  event.preventDefault();
  page += 1;

  buttonLoad.style.display = 'none';
  loaderEnd.style.display = 'block';

  searchImages(query, page)
    .then(data => {
      const images = data.hits;
      let number_img = data.totalHits; 
      let number_pages = number_img / 15;
      if (number_pages < page) {
        buttonLoad.style.display = 'none';
        loaderEnd.style.display = 'none';
        iziToast.info({
          title: '',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'bottomRight',
        });
        return;
      }
      renderImages(images, gallery);
      
      buttonLoad.style.display = 'block';
      loaderEnd.style.display = 'none';
      
      const img = gallery.lastElementChild;
      const options = img.getBoundingClientRect();
      window.scrollBy({top: options.height*2, behavior: "smooth",});

      lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 200,
        captionsData: 'alt'
      });
    lightbox.refresh();
      
    })
    .catch(() => {
      iziToast.error({
        title: '',
        message:
          'Sorry, there was an error while fetching images. Please, try again later!',
        position: 'topRight',
      });
    });
}

form.addEventListener('submit', handleSearch);
buttonLoad.addEventListener('click', searchMoreImages);


