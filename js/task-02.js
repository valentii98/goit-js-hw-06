const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const liEl = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const list = document.createElement("li");
  list.classList.add("item");
  list.textContent = ingredient;
  liEl.after(list);
}