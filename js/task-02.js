const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItem = document.querySelector('#ingredients');
console.log(listItem);
listItem.style.listStyle = 'none';

const ingr = ingredients.map(item => {
  const ingredientElement = document.createElement('li');

  ingredientElement.textContent = item;
  ingredientElement.className = 'item';
  return ingredientElement;
});


listItem.append(...ingr);
