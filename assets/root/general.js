const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

function closeModal() {
  modal.style.display = 'none';
}

function openModal(imageSrc) {
  modal.style.display = 'flex';
  modalImage.src = imageSrc;
}

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    if (modal.style.display === 'flex') {
      closeModal();
    } else {
      openModal(image.src);
    }
  });
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});