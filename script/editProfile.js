const editPopup = document.querySelector('.popup_edit-profile');
const editPopupOverlay = editPopup.querySelector('.popup__overlay');

const editBtn = document.querySelector('.profile__btn_type_edit');
const editFormPopup = editPopup.querySelector('.popup__form');
const closePopupEditForm = editPopup.querySelector('.popup__btn-close');

const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');

const inputName = editPopup.querySelector('.popup__input_type_name');
const inputJob = editPopup.querySelector('.popup__input_type_job');

function openEditPopup() {
  openPopup(editPopup);
}

function closeEditPopup() {
  closePopup(editPopup);
}

function editProfile() {
  inputName.value = infoName.textContent;
  inputJob.value = infoJob.textContent;

  openEditPopup();
}

function saveProfile(e) {
  e.preventDefault();

  infoName.textContent = inputName.value;
  infoJob.textContent = inputJob.value;

  closeEditPopup();
}

editBtn.addEventListener('click', editProfile);
editFormPopup.addEventListener('submit', saveProfile);

closePopupEditForm.addEventListener('click', closeEditPopup);
editPopupOverlay.addEventListener('click', closeEditPopup);
