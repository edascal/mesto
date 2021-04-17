const page = document.querySelector('.page');

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  page.classList.add('page__popup-opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  page.classList.remove('page__popup-opened');
}

function handleKeyDown(evt, popupElement) {
  if (evt.key === 'Escape') {
    closePopup(popupElement);
  }
}
