const ingredients = [
   'Potatoes',
   'Mushrooms',
   'Garlic',
   'Tomatos',
   'Herbs',
   'Condiments',
];

const listEl = document.querySelector('ul');

const makeEl = elements => {
   return elements.map(element => {
      const ingredientEl = document.createElement('li');
      ingredientEl.textContent = element;
      ingredientEl.classList.add('item');

      return ingredientEl;
   });
};

const elementsEl = makeEl(ingredients);

listEl.append(...elementsEl);
