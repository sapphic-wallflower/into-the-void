// Image gallery one
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

// Image gallery two
const gallery1 = document.querySelector('.gallery1');
const lightbox1 = document.querySelector('.lightbox1');
const lightboxImage1 = lightbox1.querySelector('img');
const altText1 = lightbox1.querySelector('.alt-text1');

gallery1.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    lightbox1.classList.add('active');
    lightbox1Image.src = e.target.src;
    altText1.textContent = e.target.alt;
  }
});

lightbox1.addEventListener('click', e => {
  if (e.target === lightbox1) {
    lightbox1.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox1.classList.remove('active');
  }
});

// Image gallery three
const gallery2 = document.querySelector('.gallery2');
const lightbox2 = document.querySelector('.lightbox2');
const lightboxImage2 = lightbox2.querySelector('img');
const altText2 = lightbox2.querySelector('.alt-text2');

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    lightbox2.classList.add('active');
    lightbox2Image.src = e.target.src;
    altText2.textContent = e.target.alt;
  }
});

lightbox2.addEventListener('click', e => {
  if (e.target === lightbox2) {
    lightbox2.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox2.classList.remove('active');
  }
});

