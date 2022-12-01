const inputEl = document.querySelector('#validation-input');
const inputDataLength = document.querySelector('input[data-length="6"]');

inputEl.addEventListener('blur', () => {
  event.currentTarget.value.length === Number(inputDataLength.dataset.length)
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
});
