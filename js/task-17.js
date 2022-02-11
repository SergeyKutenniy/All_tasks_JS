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
  const filter = evt.target.value.toLowerCase().trip(); // введенные значения в нижнем регистре и пробелы убраны

  const filteredItems = tech.filter(
    (t) => t.label.toLowerCase().includes(filter).trip() // приводим введенные значения к нижнему регистру, которые включены в фильтре
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}

// //Пример № 2

// const contacts = [
//   "Malcolm Wilkinson",
//   "Sawyer Wolf",
//   "Ori Lott",
//   "Alec Roach",
//   "Reece Chase",
//   "Laurel Chavez",
//   "Matthew Mercer",
//   "Ina Roth",
//   "Brett Garrison",
//   "Thane Saunders",
//   "Hope Alford",
//   "Vernon Brown",
// ];

// const input = document.querySelector(".input");
// const contactsList = document.querySelector(".contacts-list");

// input.addEventListener("input", _.throttle(onInput, 800));

// function onInput(event) {
//   const request = event.target.value.trim().toLowerCase();

//   console.log(request);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.toLowerCase().includes(request)
//   );

//   renderContacts(filteredContacts);
// }

// renderContacts(contacts);

// function renderContacts(contacts) {
//   contactsList.innerHTML = "";

//   const markup = contacts.map((contact) => `<li>${contact}</li>`).join("");

//   contactsList.insertAdjacentHTML("beforeend", markup);
// }
