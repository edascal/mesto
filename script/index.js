const page = document.querySelector('.page');

const editBtn = document.querySelector('.profile__btn_type_edit');
const addPlaceBtn = document.querySelector('.profile__btn_type_add');

// Edit Profile Popup
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileForm = document.forms.editProfileForm;
const userName = editProfileForm.elements.userName;
const userJob = editProfileForm.elements.userJob;
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');
const saveProfileBtn = editProfilePopup.querySelector('.popup__btn-save');

editBtn.addEventListener('click', () => {
  userName.defaultValue = infoName.textContent;
  userJob.defaultValue = infoJob.textContent;
  openPopup(editProfilePopup);
});

function saveProfile(e) {
  e.preventDefault();

  infoName.textContent = userName.value;
  infoJob.textContent = userJob.value;

  closePopup(editProfilePopup);
  editProfileForm.reset();
}

editProfileForm.addEventListener('submit', saveProfile);

// ----------------

// Add Card Popup

const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlaceForm = document.forms.addPlaceForm;
const placeName = addPlaceForm.elements.placeName;
const placeLink = addPlaceForm.elements.placeLink;
const saveBtn = addPlacePopup.querySelector('.popup__btn-save');

addPlaceBtn.addEventListener('click', () => {
  openPopup(addPlacePopup);
});

function savePlace(e) {
  e.preventDefault();

  const name = placeName.value;
  const link = placeLink.value;

  addCard(name, link);

  closePopup(addPlacePopup);
  addPlaceForm.reset();
}

addPlaceForm.addEventListener('submit', savePlace);

//----------------

// Create Card

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
  const cardName = cardItem.querySelector('.card__name');
  const deleteBtn = cardItem.querySelector('.card__icon_delete');
  const likeBtn = cardItem.querySelector('.card__icon_like');

  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  deleteBtn.addEventListener('click', () => {
    cardItem.remove();
  });

  cardImage.addEventListener('click', () => {
    openCardPreview(link, name);
  });

  likeBtn.addEventListener('click', (e) => {
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

document.addEventListener('DOMContentLoaded', () => {
  initialCards.forEach((card) => {
    addCard(card.name, card.link);
  });
});

//----------------

// Card Preview Popup

const cardPreview = document.querySelector('.popup_type_card-preview');

const cardPreviewImage = cardPreview.querySelector('.card-preview__image');
const cardPreviewTitle = cardPreview.querySelector('.card-preview__title');

function openCardPreview(image, title) {
  cardPreviewImage.src = image;
  cardPreviewImage.alt = title;
  cardPreviewTitle.textContent = title;

  openPopup(cardPreview);
}

//---------------

// Open/Close Popup

let activePopupKeyDownHandler;
let activeClosePopupHandler;

function openPopup(popupElement) {
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

function closePopup(popupElement) {
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
