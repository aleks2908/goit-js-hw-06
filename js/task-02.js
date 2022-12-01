const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const itemList = ingredients.map(ingredient => {
  const newItemEl = document.createElement('li');
  newItemEl.textContent = ingredient;
  newItemEl.classList.add('item');
  return newItemEl;
});

ingredientsList.append(...itemList);
