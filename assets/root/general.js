const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxDesc = lightbox.querySelector('.description');
const closeButton = document.querySelector('.close-button');

function showImage(event) {
  lightboxImg.src = event.target.src;
  lightboxDesc.textContent = event.target.alt;
  lightbox.classList.add('show');
}

function closeImage(event) {
  if (event.type === 'keydown' && event.keyCode !== 27) return;
  lightbox.classList.remove('show');
}

images.forEach(image => {
  image.addEventListener('click', showImage);
});

closeButton.addEventListener('click', closeImage);
document.addEventListener('keydown', closeImage);
