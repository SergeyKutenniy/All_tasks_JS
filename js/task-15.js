// Выбирает одну кнопку из многих

const tagsContainer = document.querySelector(".js-tags");

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
}

const currentActiveBtn = document.querySelector(".tags__btn--active");

if (currentActiveBtn) {
  currentActiveBtn.classList.remove("tags__btn--active");
}

const nextActiveBtn = evt.target;
nextActiveBtn.classList.add("tags__btn--active");
