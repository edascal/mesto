import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, url) {
    this._popupElement.querySelector('.card-preview__image').src = url;
    this._popupElement.querySelector('.card-preview__title').textContent = name;
    this._popupElement.querySelector('.card-preview__image').alt = name;
    super.open();
  }
}
