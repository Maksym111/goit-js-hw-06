const counterValue = document.querySelector('#value');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

counterValue.textContent = 0;

const incrementValueBtn = () => {
  return (counterValue.textContent = Number(counterValue.textContent) + 1);
};

const decrementValueBtn = () => {
  return (counterValue.textContent -= 1);
};

incrementBtnEl.addEventListener('click', incrementValueBtn);
decrementBtnEl.addEventListener('click', decrementValueBtn);
