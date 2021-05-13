import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, url) {
    const cardPreviewImage = this._popupElement.querySelector('.card-preview__image');
    const cardPreviewTitle = this._popupElement.querySelector('.card-preview__title');

    cardPreviewImage.src = url;
    cardPreviewImage.alt = name;
    cardPreviewTitle.textContent = name;

    super.open();
  }
}
