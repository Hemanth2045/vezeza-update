const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const closeButton = document.querySelector('.modal-close');

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const fullImgUrl = event.target.parentNode.href;
    modalImg.src = fullImgUrl;
    modal.style.display = 'flex';
  }
});

closeButton.addEventListener('click', event => {
  event.preventDefault();
  modalImg.src = '';
  modal.style.display = 'none';
});

modal.addEventListener('click', event => {
  event.preventDefault();
  modalImg.src = '';
  modal.style.display = 'none';
});
