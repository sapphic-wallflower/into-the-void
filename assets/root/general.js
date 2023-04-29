const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const altText = lightbox.querySelector('.alt-text');

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    lightbox.classList.add('active');
    lightboxImage.src = e.target.src;
    altText.textContent = e.target.alt;
  }
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
