// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const colorEl = document.querySelector('.color');
// const btnEl = document.querySelector('.change-color');

// btnEl.addEventListener('click', () => {
//   const currentColor = getRandomHexColor();
//   colorEl.textContent = currentColor;
//   document.body.style.backgroundColor = currentColor;
// });

const colorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', () => getRandomHexColor());

function getRandomHexColor() {
  const currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorEl.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
}