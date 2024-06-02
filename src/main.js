// main.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './pixabay-api.js';
import { renderGallery, showLoader, hideLoader, clearGallery, showErrorToast, showInfoToast } from './render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const input = form.querySelector('input[name="query"]');
  let lightbox;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (query === '') {
      showErrorToast('Please enter a search term');
      return;
    }

    clearGallery();
    showLoader();

    try {
      const data = await fetchImages(query);
      if (data.hits.length === 0) {
        showInfoToast('Sorry, there are no images matching your search query. Please try again!');
      } else {
        renderGallery(data.hits);
        if (!lightbox) {
          lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionDelay: 0
          });
          lightbox.refresh();
        } else {
          lightbox.refresh();
        }
      }
    } catch (error) {
      showErrorToast('Failed to fetch images. Please try again later.');
    } finally {
      hideLoader();
    }
  });
});
