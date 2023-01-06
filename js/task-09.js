const body = document.body;
const btnChangeColor = document.querySelector('.change-color');
const nameBackground = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener('click', onBtnColorChange);

function onBtnColorChange(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  nameBackground.textContent = color;
}
