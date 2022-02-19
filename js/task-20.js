// Сохранение значений в инпутах в localStorage

import "./sass/main.scss";

const form = document.querySelector(".form");

initForm();

form.addEventListener("submit", (event) => {
  event.preventDefault(); // настройка чтобы при сабмите страница не перезагружалась

  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${value}-${key}`));
}); // берем все ключи и их значения для каждого инпута

form.addEventListener("reset", () => {
  localStorage.removeItem("selectedFilters");
}); // слушатесь reset (сброс в инпутах)

form.addEventListener("change", (event) => {
  let parsedFilters = localStorage.getItem("selectedFilters");

  parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};

  parsedFilters[event.target.name] = event.target.value;

  if (!parsedFilters) return;

  localStorage.setItem("selectedFilters", JSON.stringify(parsedFilters));
}); // сохранение выбраных значений в инпутах в один обьект

function initForm() {
  let parsedFilters = localStorage.getItem("selectedFilters");

  if (parsedFilters) {
    parsedFilters = JSON.parse(parsedFilters);
  }

  Object.entries(parsedFilters).forEach(
    ([name, value]) => (form.elements[name].value = value)
  ); // при сбросе/перезагрузки страницы, данные введенные в инпут сохраняются
}
