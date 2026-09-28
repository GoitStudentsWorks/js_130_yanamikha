const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
  body: document.body,
};

if (refs.closeModalBtn) {
  refs.closeModalBtn.addEventListener('click', closeModal);
}

function toggleModal() {
  if (!refs.modal || !refs.body) {
    return;
  }
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function closeModal() {
  if (!refs.backdrop) {
    return;
  }
  toggleModal();
  window.removeEventListener('keydown', onEscapePress);
  refs.backdrop.removeEventListener('click', onBackdropClick);
}

function onEscapePress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(event) {
  if (refs.backdrop && event.target === refs.backdrop) {
    closeModal();
  }
}

export function openModal() {
  if (!refs.backdrop) {
    return;
  }
  toggleModal();
  window.addEventListener('keydown', onEscapePress);
  refs.backdrop.addEventListener('click', onBackdropClick);
}
