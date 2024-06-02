import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoader, hideLoader, clearGallery } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const input = form.querySelector('input[name="query"]');
  let lightbox;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (query === '') {
      iziToast.error({ title: 'Error', message: 'Please enter a search term' });
      return;
    }

    clearGallery();
    showLoader();

    try {
      const data = await fetchImages(query);
      if (data.hits.length === 0) {
        iziToast.info({ title: 'Info', message: 'Sorry, there are no images matching your search query. Please try again!' });
      } else {
        renderGallery(data.hits);
        if (!lightbox) {
          lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionDelay: 0
          });

          lightbox.on('show.simplelightbox', function () {
            const slbInner = document.querySelector('.slbInner');
            const currentImageIndex = lightbox.currentImageIndex;
            const currentImage = data.hits[currentImageIndex];
            const altDescription = currentImage.tags;
            const captionHtml = `<div class="slbCaptionOuter">${altDescription}</div>`;
            slbInner.insertAdjacentHTML('beforeend', captionHtml);
          });

          lightbox.on('close.simplelightbox', function () {
            const slbCaptionOuter = document.querySelector('.slbCaptionOuter');
            if (slbCaptionOuter) {
              slbCaptionOuter.remove();
            }
          });
        } else {
          lightbox.refresh();
        }
      }
    } catch (error) {
      iziToast.error({ title: 'Error', message: 'Failed to fetch images. Please try again later.' });
    } finally {
      hideLoader();
    }
  });
});
