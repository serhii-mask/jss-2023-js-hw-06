function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
const create = document.querySelector("[data-create");
const destroy = document.querySelector("[data-destroy");

input.addEventListener("change", createBoxes);

// ---------------

function createBoxes(amount) {
   // console.log(amount.currentTarget);
   const number = amount.currentTarget.value;
   let size = 30;
   const array = [];

   for (let i = 0; i < number; i += 1) {
      const color = getRandomHexColor();
      const box = document.createElement("div");
      box.textContent = "TExT";
      box.width = size;
      box.height = size;
      box.style.backgroundColor = color;

      array.push(box);

      size += 10;
   }
   console.log(array);
   // return array;

   create.addEventListener("click", () => {
      console.log(array);
      boxes.append(...array);
      console.log(...array);
   });

   destroy.addEventListener("click", destroyBoxes);
}

// function arrr() {
//    console.log(array);
//    boxes.append(...array);
// }

// -----------------

// create.addEventListener("click", createBoxes);

// -----------------

function destroyBoxes() {
   boxes.innerHTML = "";
}

console.log(boxes);
