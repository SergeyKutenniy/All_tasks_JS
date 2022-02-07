// Добавляет елементы разметки в HTML

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredientsList = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const elemLi = document.createElement("li");
  elemLi.textContent = ingredients[i];
  elemLi.classList.add("item");
  ingredientsList.push(elemLi);
}

ingredientsEl.append(...ingredientsList);
