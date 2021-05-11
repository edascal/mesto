export default class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  setEventListeners() {
    const closeBtn = this._popupElement.querySelector('.popup__btn-close');
    const overlay = this._popupElement.querySelector('.popup__overlay');

    closeBtn.addEventListener('click', () => {
      this.close();
    });

    overlay.addEventListener('click', () => {
      this.close();
    });
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
}
