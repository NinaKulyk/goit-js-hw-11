import iziToast from 'izitoast';

export function showLoader() {
}

export function hideLoader() {
}

export function clearGallery() {
}

export function renderGallery(images) {
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

export function showInfoToast(message) {
  iziToast.info({
    title: 'Info',
    message: message,
  });
}
