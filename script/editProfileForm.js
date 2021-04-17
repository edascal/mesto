const editProfilePopup = document.querySelector('.popup_edit-profile');
const editPopupOverlay = editProfilePopup.querySelector('.popup__overlay');

const editBtn = document.querySelector('.profile__btn_type_edit');
const closeEditForm = editProfilePopup.querySelector('.popup__btn-close');
const saveProfileBtn = editProfilePopup.querySelector('.popup__btn-save');

const editProfileForm = document.forms.editProfileForm;
const userName = editProfileForm.elements.userName;
const userJob = editProfileForm.elements.userJob;

const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');

function openEditPopup() {
  resetProfileForm();

  openPopup(editProfilePopup);
}

function closeEditPopup() {
  closePopup(editProfilePopup);
}

function editProfileKeyDown(evt) {
  handleKeyDown(evt, editProfilePopup);
}

function resetProfileForm() {
  userName.defaultValue = infoName.textContent;
  userJob.defaultValue = infoJob.textContent;
  editProfileForm.reset();
}

function saveProfile(e) {
  e.preventDefault();

  infoName.textContent = userName.value;
  infoJob.textContent = userJob.value;

  closeEditPopup();
}

editBtn.addEventListener('click', openEditPopup);
editProfileForm.addEventListener('submit', saveProfile);

document.addEventListener('keydown', editProfileKeyDown);

closeEditForm.addEventListener('click', closeEditPopup);
editPopupOverlay.addEventListener('click', closeEditPopup);
