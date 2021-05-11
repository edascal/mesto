import Popup  from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
  }

  open(name, url) {
    this._popupElement.querySelector('.card-preview__image').src = url;
    this._popupElement.querySelector('.card-preview__title').textContent = name;
    super.open();
  }
}
