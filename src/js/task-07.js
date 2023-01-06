const rangeElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');

rangeElem.addEventListener('input', changeSizeText);

function changeSizeText(event) {
  textElem.style.fontSize = event.currentTarget.value + 'px';
}
