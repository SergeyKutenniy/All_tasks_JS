// фильтрация введенных данных по списку (в поиске вводим название елемента и нам выдает только те елементы которые совпали)

const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "React" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 300)); //метод _.dobounce вызывает функцию onFilterChange через 300 ms после прекращения ввода в input (метод _.throttle - затормаживает функцию, вызывает её через указаный промежуток времени)

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join(""); //рендерим разметку (список с li)
}

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter((t) =>
    t.label.toLowerCase().includes(filter)
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
