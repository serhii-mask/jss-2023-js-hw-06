const input = document.querySelector('input');

input.addEventListener('blur', onInput);

function onInput(event) {
   if (event.currentTarget.dataset.length != event.currentTarget.value.length) {
      input.classList.add('invalid');
   } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
   }
}
