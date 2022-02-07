// Выводит название группы и количесто подкатегорий

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories ", categoriesEl.length);

categoriesEl.forEach(function (category) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
