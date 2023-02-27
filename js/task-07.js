const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onInput);

function onInput(event) {
   text.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
}
