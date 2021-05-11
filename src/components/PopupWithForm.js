import  Popup  from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitHandler) {
    super(popupElement);
    this._submitHandler = submitHandler;
  }

  _getInputValues() {
    const inputValues = {};
    const inputs = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupForm.addEventListener('submit', () => {
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
