const card = document.querySelector('.card');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

function createCard(name, link) {
  const cardTemplate = document.querySelector('#add-template').content;
  const cardItem = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');
  const deleteBtn = cardItem.querySelector('.card__icon_delete');
  const likeBtn = cardItem.querySelector('.card__icon_like');

  cardItem.querySelector('.card__name').textContent = name;
  cardItem.querySelector('.card__image').src = link;
  cardItem.querySelector('.card__image').alt = name;

  deleteBtn.addEventListener('click', function () {
    cardItem.remove();
  });

  cardImage.addEventListener('click', function () {
    openCardPreview(link, name);
  });

  likeBtn.addEventListener('click', function (e) {
    e.target.classList.toggle('card__icon_like_active');
  });

  return cardItem;
}

function renderCard(cardItem) {
  card.prepend(cardItem);
}

function addCard(name, link) {
  const newCard = createCard(name, link);
  renderCard(newCard);
}

document.addEventListener('DOMContentLoaded', function () {
  initialCards.forEach((card) => {
    addCard(card.name, card.link);
  });
});
