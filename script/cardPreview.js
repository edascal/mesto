const cardPreview = document.querySelector('.popup_card-preview');
const cardPreviewOverlay = cardPreview.querySelector('.popup__overlay');

const cardPreviewImage = cardPreview.querySelector('.card-preview__image');
const cardPreviewTitle = cardPreview.querySelector('.card-preview__title');
const closeBtn = cardPreview.querySelector('.popup__btn-close');

function openCardPreview() {
  openPopup(cardPreview);
}

function closeCardPreview() {
  closePopup(cardPreview);
}

function preview(image, title) {
  cardPreviewImage.src = image;
  cardPreviewImage.alt = title;
  cardPreviewTitle.textContent = title;

  openCardPreview();
}

closeBtn.addEventListener('click', closeCardPreview);
cardPreviewOverlay.addEventListener('click', closeCardPreview);
