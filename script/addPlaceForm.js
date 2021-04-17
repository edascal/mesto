const addPlacePopup = document.querySelector('.popup_add-place');
const addPopupOverlay = addPlacePopup.querySelector('.popup__overlay');
const addPlaceBtn = document.querySelector('.profile__btn_type_add');
const saveBtn = addPlacePopup.querySelector('.popup__btn-save');
const closeAddPlaceForm = addPlacePopup.querySelector('.popup__btn-close');

const addPlaceForm = document.forms.addPlaceForm;
const placeName = addPlaceForm.elements.placeName;
const placeLink = addPlaceForm.elements.placeLink;

function openAddPopup() {
  resetPlaceForm();

  openPopup(addPlacePopup);
}

function closeAddPopup() {
  closePopup(addPlacePopup);
}

function addPlaceKeyDown(evt) {
  handleKeyDown(evt, addPlacePopup);
}

function resetPlaceForm() {
  addPlaceForm.reset();
}

function savePlace(e) {
  e.preventDefault();

  const name = placeName.value;
  const link = placeLink.value;

  addCard(name, link);

  closeAddPopup();
}

addPlaceBtn.addEventListener('click', openAddPopup);
addPlaceForm.addEventListener('submit', savePlace);

document.addEventListener('keydown', addPlaceKeyDown);

closeAddPlaceForm.addEventListener('click', closeAddPopup);
addPopupOverlay.addEventListener('click', closeAddPopup);
