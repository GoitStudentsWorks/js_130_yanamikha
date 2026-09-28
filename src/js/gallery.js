import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('ul.portfolio__gallery');

const lightbox = new SimpleLightbox('.portfolio__gallery a', {
  captionsData: 'desc',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const toastOptions = {
  theme: 'dark',
  position: 'topRight',
  maxWidth: 432,
  backgroundColor: '#EF4040',
  icon: 'fa-solid fa-triangle-exclamation',
};

export function createGallery(images, append = false) {
  if (images.length === 0) {
    if (!append) {
      clearGallery();

      iziToast.show({
        ...toastOptions,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    return;
  }

  const galleryMarkup = images
    .map(({ img, desc, title }) => {
      return `
        <li class="portfolio__gallery-item portfolio__img">
          <a
            href="${img}"
            class="portfolio__gallery-link"
            data-desc="${desc || title || ''}"
          >
            <img
              class="portfolio__gallery-image"
              src="${img}"
              alt="${desc || title || ''}"
              loading="lazy"
            />
          </a>
        </li>
      `;
    })
    .join('');

  if (append) {
    galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
  } else {
    galleryEl.innerHTML = galleryMarkup;
  }

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
  lightbox.refresh();
}
