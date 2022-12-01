const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert('Заповніть всі поля, будь ласка');
  }

  const valuesObject = {
    email: email.value,
    password: password.value,
  };

  console.log(valuesObject);

  event.currentTarget.reset();
}
