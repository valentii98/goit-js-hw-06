const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liEl = document.querySelector("#ingredients");
const liMarkup = [];

function createIngredientsList(ingredients = []) {
  ingredients.map((elem) => {
    const item = document.createElement("li");
    item.textContent = elem;
    item.classList.add("item");
    liMarkup.push(item);
  });
  liEl.append(...liMarkup);
}
createIngredientsList(ingredients);
