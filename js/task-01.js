const categoriesEl = document.querySelector('ul');
const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const counterCategoriesEl = elements => {
   return elements.forEach(element => {
      console.log(`Category: ${element.children[0].textContent}`);
      console.log(`Elements: ${element.children[1].children.length}`);
   });
};

console.log(counterCategoriesEl(itemEl));
