const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', inFocusValid);
inputEl.addEventListener('blur', isCorrectValid);

function inFocusValid(event) {
  inputEl.className = '';
}

function isCorrectValid(event) {
  const dataLength = Number(event.currentTarget.dataset.length);
  const valueLength = event.currentTarget.value.length;
  console.log(dataLength === valueLength);

  if (dataLength === valueLength) {
    return inputEl.classList.add('valid');
  } else {
    return inputEl.classList.add('invalid');
  }
}
