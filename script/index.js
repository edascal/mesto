import { Card } from './Card.js';
import { openPopup, closePopup } from './popup.js';
import { FormValidator } from './FormValidator.js';

const editBtn = document.querySelector('.profile__btn_type_edit');
const addPlaceBtn = document.querySelector('.profile__btn_type_add');

// Edit Profile Popup
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileForm = document.forms.editProfileForm;
const userName = editProfileForm.elements.userName;
const userJob = editProfileForm.elements.userJob;
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');

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

const profileValidation = new FormValidator(editProfileForm, {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});

profileValidation.enableValidation();

editProfileForm.addEventListener('submit', saveProfile);

// ----------------

// Create Card

const card = document.querySelector('.card');

function createCard(name, link) {
  const cardElement = new Card(name, link);

  return cardElement.generateCard();
}

function renderCard(cardItem) {
  card.prepend(cardItem);
}

function addCard(name, link) {
  const newCard = createCard(name, link);
  renderCard(newCard);
}

// Add Card Popup

const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlaceForm = document.forms.addPlaceForm;
const placeName = addPlaceForm.elements.placeName;
const placeLink = addPlaceForm.elements.placeLink;
const addPlaceFormSaveBtn = addPlacePopup.querySelector('.popup__btn-save');

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
  addPlaceFormSaveBtn.setAttribute('disabled', true);
}

const cardValidation = new FormValidator(addPlaceForm, {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});

cardValidation.enableValidation();

addPlaceForm.addEventListener('submit', savePlace);

//----------------

//---------------

document.addEventListener('DOMContentLoaded', () => {
  initialCards.forEach((card) => {
    addCard(card.name, card.link);
  });
});
