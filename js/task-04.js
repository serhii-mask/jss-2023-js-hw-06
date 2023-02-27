let counterValue = 0;

const refs = {
   decrement: document.querySelector('[data-action="decrement"]'),
   increment: document.querySelector('[data-action="increment"]'),
   value: document.querySelector('#value'),
};

refs.decrement.addEventListener('click', onDecrement);
refs.increment.addEventListener('click', onIncrement);

function onDecrement() {
   counterValue -= 1;
   refs.value.textContent = counterValue;
}

function onIncrement() {
   counterValue += 1;
   refs.value.textContent = counterValue;
}
