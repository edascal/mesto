import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  editProfileButton,
  editProfileForm,
  userName,
  userJob,
  addPlaceButton,
  addPlaceForm,
  selectors,
  classes,
} from '../utils/constants.js';

const profileInfo = new UserInfo({ nameSelector: selectors.profileName, jobSelector: selectors.profileJob });

const editProfilePopupForm = new PopupWithForm(selectors.editProfilePopup, editProfileSubmitHandler);
editProfilePopupForm.setEventListeners();

function editProfileSubmitHandler(profileInputValues) {
  profileInfo.setUserInfo(profileInputValues.userName, profileInputValues.userJob);

  editProfilePopupForm.close();
}

editProfileButton.addEventListener('click', () => {
  const userInfo = profileInfo.getUserInfo();
  userName.value = userInfo.name;
  userJob.value = userInfo.job;
  editProfilePopupForm.open();
});

const profileValidation = new FormValidator(editProfileForm, {
  inputSelector: selectors.popupInput,
  submitButtonSelector: selectors.popupSaveButton,
  inputErrorClass: classes.popupInputError,
  errorClassActive: classes.popupInputErrorActive,
});

profileValidation.enableValidation();

const addCardPopupForm = new PopupWithForm(selectors.addPlacePopup, addCardSubmitHandler);
addCardPopupForm.setEventListeners();

function addCardSubmitHandler(cardInputValues) {
  addCard(cardInputValues.placeName, cardInputValues.placeLink);

  addCardPopupForm.close();
}

addPlaceButton.addEventListener('click', () => {
  addCardPopupForm.open();
});

const cardValidation = new FormValidator(addPlaceForm, {
  inputSelector: selectors.popupInput,
  submitButtonSelector: selectors.popupSaveButton,
  inputErrorClass: classes.popupInputError,
  errorClassActive: classes.popupInputErrorActive,
});

cardValidation.enableValidation();

const cardSection = new Section({ items: initialCards, renderer: createCard }, selectors.card);

function cardImageClickHandler(name, url) {
  popupWithImage.open(name, url);
}

function createCard({ name, link }) {
  const cardElement = new Card(selectors.cardTemplate, name, link, cardImageClickHandler);

  return cardElement.generateCard();
}

function renderCard(cardItem) {
  cardSection.addItem(cardItem);
}

function addCard(name, link) {
  const newCard = createCard({ name, link });
  renderCard(newCard);
}

const popupWithImage = new PopupWithImage(selectors.cardPreviewPopup);
popupWithImage.setEventListeners();

document.addEventListener('DOMContentLoaded', () => {
  cardSection.renderItems();
});
