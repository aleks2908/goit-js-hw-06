const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    return alert('Заповніть всі поля, будь ласка');
  }

  const valuesObject = {
    email,
    password,
  };

  console.log(valuesObject);

  event.currentTarget.reset();
}
