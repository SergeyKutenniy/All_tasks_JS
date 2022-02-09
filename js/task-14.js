// Скрипт переключения класса с кнопки на кнопку

const tagsContainer = document.querySelector(".js-tags");
let selectedTags = new Set(); //Set() собирает уникальные (неповторяющие) елементы (только примитивы) в сэт (обьект)

tagsContainer.addEventListener(".click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
}

const btn = evt.target;
const tag = btn.dataset.value;
const isActive = btn.classlist.contains("tags__btn--active");

if (isActive) {
  selectedTags.delete(tag);
} else {
  selectedTags.add(tag);
}

// toggle - вешает класс если его нет, и снимает класс если он есть (выбрать многое из многих)

evt.target.classList.toggle(".tags__btn--active");
