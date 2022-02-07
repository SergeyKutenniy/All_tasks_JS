// Делегирывание событий
// Вешает слушателя события на общий контейнер в котором есть однотипные кнопки. Событие прослушивается только по клике на саму кнопку, а не по пустому месту в контейнере

const container = document.querySelector(".js-container");

container.addEventListener("click", onClick);

function onClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
}

// Код для добавление кнопки

const addBtn = document.querySelector(".js-add-btn");
let labelCounter = 6;

addBtn.addEventListener("click", onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement("button");
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = "button";

  container.appendChild(btn);
  labelCounter += 1;
}
