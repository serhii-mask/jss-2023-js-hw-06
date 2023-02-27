const refs = {
   inputName: document.querySelector('#name-input'),
   outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', onInputName);

function onInputName(event) {
   refs.outputName.textContent = event.currentTarget.value;

   if (event.currentTarget.value === '') {
      refs.outputName.textContent = 'Anonymous';
   }
}
