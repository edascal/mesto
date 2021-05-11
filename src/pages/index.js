import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  editBtn,
  editProfileForm,
  userName,
  userJob,
  addPlaceBtn,
  addPlaceForm,
} from '../utils/constants.js';

const profileInfo = new UserInfo({ nameSelector: '.profile__info-name', jobSelector: '.profile__info-job' });

const editProfilePopupForm = new PopupWithForm('.popup_type_edit-profile', editProfileSubmitHandler);
editProfilePopupForm.setEventListeners();

function editProfileSubmitHandler(profileInputValues) {
  profileInfo.setUserInfo(profileInputValues.userName, profileInputValues.userJob);

  editProfilePopupForm.close();
}

editBtn.addEventListener('click', () => {
  const userInfo = profileInfo.getUserInfo();
  userName.value = userInfo.name;
  userJob.value = userInfo.job;
  editProfilePopupForm.open();
});

const profileValidation = new FormValidator(editProfileForm, {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});

profileValidation.enableValidation();

const addCardPopupForm = new PopupWithForm('.popup_type_add-place', addCardSubmitHandler);
addCardPopupForm.setEventListeners();

function addCardSubmitHandler(cardInputValues) {
  addCard(cardInputValues.placeName, cardInputValues.placeLink);

  addCardPopupForm.close();
}

addPlaceBtn.addEventListener('click', () => {
  addCardPopupForm.open();
});

const cardValidation = new FormValidator(addPlaceForm, {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});

cardValidation.enableValidation();

const cardSection = new Section({ items: initialCards, renderer: createCard }, '.card');

function cardImageClickHandler(name, url) {
  popupWithImage.open(name, url);
}

function createCard({ name, link }) {
  const cardElement = new Card(name, link, cardImageClickHandler);

  return cardElement.generateCard();
}

function renderCard(cardItem) {
  cardSection.addItem(cardItem);
}

function addCard(name, link) {
  const newCard = createCard({ name, link });
  renderCard(newCard);
}

const popupWithImage = new PopupWithImage('.popup_type_card-preview');
popupWithImage.setEventListeners();

document.addEventListener('DOMContentLoaded', () => {
  cardSection.renderItems();
});
