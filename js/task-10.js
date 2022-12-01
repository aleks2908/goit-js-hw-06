function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const numberEl = document.querySelector('#controls');
const boxesCount = numberEl.firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  createBoxes(boxesCount.value);
});

destroyBtn.addEventListener('click', destroyBoxes);

let total = '';
let width = 30;

function createBoxes(amount){
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    total += `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${width}px;" ></div>`;
  }
  boxes.innerHTML = total;
  total = '';
  width = 30;
};

function destroyBoxes(){
  boxes.innerHTML = '';
  boxesCount.value = '';
};