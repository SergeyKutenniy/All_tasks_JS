// Скрипт переключения класса с кнопки на кнопку

const tagsContainer = document.querySelector(".js-tags");
let selectedTag = null;

tagsContainer.addEventListener(".click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
}

const currentActiveBtn = document.querySelector(".tags__btn--active");

if (currentActiveBtn) {
  currentActiveBtn.classList.remove(".tags__btn--active");
}

// currentActiveBtn?.classList.remove("tags__btn--active");

const nextActiveBtn = evt.target;
nextActiveBtn.classList.add("tags__btn--active");
selectedTag = nextActiveBtn.dataset.value;
