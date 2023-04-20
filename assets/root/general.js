const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close-button');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.style.opacity = 1;
    lightbox.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
  });
});

closeButton.addEventListener('click', () => {
  lightbox.style.opacity = 0;
  lightbox.style.pointerEvents = 'none';
  document.body.style.overflow = 'auto';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    lightbox.style.opacity = 0;
    lightbox.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
  }
});