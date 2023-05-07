import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector(`[name="email"]`),
  message: document.querySelector(`[name="message"]`),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

filledForm();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  formData = {
    email: refs.email.value,
    message: refs.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.email.value === '' || refs.message.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  JSON.parse(localStorage.getItem(STORAGE_KEY));

  console.log({
    email: refs.email.value,
    message: refs.message.value,
  });

  refs.form.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function filledForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const savedObj = JSON.parse(savedData);
    refs.email.value = savedObj.email || '';
    refs.message.value = savedObj.message || '';
  }
}
