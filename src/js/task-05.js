const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inInputWrite);

function inInputWrite(elem) {
  if (elem.currentTarget.value === '') {
    return (titleEl.textContent = 'Anonymous');
  } else {
    return (titleEl.textContent = elem.currentTarget.value);
  }
}
