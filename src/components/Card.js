export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this._name, this._link);
    });
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
