function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
   let color = getRandomHexColor();
   body.style.backgroundColor = color;
   textColor.textContent = color;
}
