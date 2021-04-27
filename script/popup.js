let activePopupKeyDownHandler;
let activeClosePopupHandler;

export function openPopup(popupElement) {
  const closeBtn = popupElement.querySelector('.popup__btn-close');
  const popupOverlay = popupElement.querySelector('.popup__overlay');

  popupElement.classList.add('popup_opened');
  activePopupKeyDownHandler = (evt) => {
    handleKeyDown(evt, popupElement);
  };

  activeClosePopupHandler = () => {
    closePopup(popupElement);
  };

  closeBtn.addEventListener('click', activeClosePopupHandler);

  popupOverlay.addEventListener('click', activeClosePopupHandler);

  document.addEventListener('keydown', activePopupKeyDownHandler);
}

export function closePopup(popupElement) {
  const closeBtn = popupElement.querySelector('.popup__btn-close');
  const popupOverlay = popupElement.querySelector('.popup__overlay');

  popupElement.classList.remove('popup_opened');

  document.removeEventListener('keydown', activePopupKeyDownHandler);

  closeBtn.removeEventListener('click', activeClosePopupHandler);

  popupOverlay.removeEventListener('click', activeClosePopupHandler);
}

function handleKeyDown(evt, popupElement) {
  if (evt.key === 'Escape') {
    closePopup(popupElement);
  }
}
