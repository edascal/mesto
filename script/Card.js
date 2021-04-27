import { openPopup } from './popup.js';

export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardItem = document.querySelector('#add-template').content.querySelector('.card__item').cloneNode(true);

    return cardItem;
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector('.card__image');
    const deleteBtn = this._element.querySelector('.card__icon_delete');
    const likeBtn = this._element.querySelector('.card__icon_like');

    deleteBtn.addEventListener('click', () => {
      this._element.remove();
    });

    likeBtn.addEventListener('click', (e) => {
      e.target.classList.toggle('card__icon_like_active');
    });

    cardImage.addEventListener('click', () => {
      this._handleOpenPopup();
    });
  }

  _handleOpenPopup() {
    const cardPreview = document.querySelector('.popup_type_card-preview');
    const cardPreviewImage = cardPreview.querySelector('.card-preview__image');
    const cardPreviewTitle = cardPreview.querySelector('.card-preview__title');

    cardPreviewImage.src = this._link;
    cardPreviewImage.alt = this._name;
    cardPreviewTitle.textContent = this._name;

    openPopup(cardPreview);
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.card__image');
    const cardName = this._element.querySelector('.card__name');

    cardName.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();
    return this._element;
  }
}
