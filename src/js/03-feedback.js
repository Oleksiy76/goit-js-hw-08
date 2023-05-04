import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector(`[name="email"]`),
  message: document.querySelector(`[name="message"]`),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

filledForm();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);

  refs.form.reset();
}

function filledForm() {
  const savedObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedObj) {
    refs.email.value = savedObj.email || '';
    refs.message.value = savedObj.message || '';
  }
}
