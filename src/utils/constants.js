export const initialCards = [
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

export const editProfileButton = document.querySelector('.profile__btn_type_edit');

export const editProfileForm = document.forms.editProfileForm;
export const userName = editProfileForm.elements.userName;
export const userJob = editProfileForm.elements.userJob;

export const addPlaceButton = document.querySelector('.profile__btn_type_add');

export const addPlaceForm = document.forms.addPlaceForm;

export const selectors = {
  profileName: '.profile__info-name',
  profileJob: '.profile__info-job',
  editProfilePopup: '.popup_type_edit-profile',
  popupInput: '.popup__input',
  popupSaveButton: '.popup__btn-save',
  addPlacePopup: '.popup_type_add-place',
  cardPreviewPopup: '.popup_type_card-preview',
  card: '.card',
  cardTemplate: '#card-template',
};

export const classes = {
  popupInputError: 'popup__input_type_error',
  popupInputErrorActive: 'popup__input-error_active',
};
