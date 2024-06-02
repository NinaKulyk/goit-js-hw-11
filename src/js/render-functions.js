// render-functions.js

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery__item">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image" />
      <div class="info">
        <p class="info-item">Likes: <span>${image.likes}</span></p>
        <p class="info-item">Views: <span>${image.views}</span></p>
        <p class="info-item">Comments: <span>${image.comments}</span></p>
        <p class="info-item">Downloads: <span>${image.downloads}</span></p>
      </div>
    </a>
  `).join('');
}

export function clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

