const inputOfNumberEl = document.querySelector('#controls').firstElementChild;
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreateEl.addEventListener('click', onCreateBtn);
btnDestroyEl.addEventListener('click', onDestroyBtn);

function createBoxes(amount) {
  const arrBoxes = [];
  amount = inputOfNumberEl.value;
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${20 + i * 10}px`;
    divEl.style.height = `${20 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(divEl);
  }

  return boxesEl.append(...arrBoxes);
}

function onCreateBtn() {
  return createBoxes();
}

function onDestroyBtn() {
  return (boxesEl.innerHTML = '');
}
