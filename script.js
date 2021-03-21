let popup = document.querySelector('.popup');
let overlay = popup.querySelector('.popup__overlay');

let editBtn = document.querySelector('.profile__btn-edit');
let popupForm = popup.querySelector('.popup__form');
let closeBtn = popup.querySelector('.popup__btn-close');

let infoName = document.querySelector('.profile__info-name');
let infoJob = document.querySelector('.profile__info-job');

let inputName = popup.querySelector('.popup__form_input_name');
let inputJob = popup.querySelector('.popup__form_input_job');

function openPopup() {
  popup.classList.add('popup__opened');
}

function closePopup() {
  popup.classList.remove('popup__opened');
}

function editProfile() {
  inputName.value = infoName.textContent;
  inputJob.value = infoJob.textContent;

  openPopup();
}

function saveProfile(e) {
  e.preventDefault();

  infoName.textContent = inputName.value;
  infoJob.textContent = inputJob.value;

  closePopup();
}

editBtn.addEventListener('click', editProfile);
popupForm.addEventListener('submit', saveProfile);

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
