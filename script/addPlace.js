const addPopup = document.querySelector('.popup_add-place');
const addPopupOverlay = addPopup.querySelector('.popup__overlay');

const addBtn = document.querySelector('.profile__btn_type_add');
const addPlaceFormPopup = addPopup.querySelector('.popup__form');
const closeAddPlaceForm = addPopup.querySelector('.popup__btn-close');

const inputPlace = addPopup.querySelector('.popup__input_type_place');
const inputLink = addPopup.querySelector('.popup__input_type_link');

function openAddPopup() {
  resetPlaceForm();

  openPopup(addPopup);
}

function closeAddPopup() {
  closePopup(addPopup);
}

function resetPlaceForm() {
  inputPlace.value = '';
  inputLink.value = '';
}

function savePlace(e) {
  e.preventDefault();

  const name = inputPlace.value;
  const link = inputLink.value;

  addCard(name, link);

  closeAddPopup();
}

addBtn.addEventListener('click', openAddPopup);
addPlaceFormPopup.addEventListener('submit', savePlace);

closeAddPlaceForm.addEventListener('click', closeAddPopup);
addPopupOverlay.addEventListener('click', closeAddPopup);
