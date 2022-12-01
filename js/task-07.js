const fontSizeSontrolEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeSontrolEl.addEventListener(
  'input',
  event => (textEl.style.fontSize = event.currentTarget.value + 'px')
);
