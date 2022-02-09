// Изменяет цвет боди при клике на цвет карточки

const colors = [
  { hex: "#ff9800", rgb: "255, 152, 0" },
  { hex: "#795548", rgb: "121, 85, 72" },
  { hex: "#607d8b", rgb: "96, 125, 139" },
];

const paletteContainer = document.querySelector(".js-palette");
const cardsMarkup = createColorCardsMarkup(colors); //записали функцию создания разметки в переменную

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup); // добавили в ДОМ созданную разметку

paletteContainer.addEventListener("click", onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `<div class="color-card">
        <div class="color-swatch" data-hex="${hex}" data-rgb="${rgb}" style="background-color: ${hex}"></div></div>
        <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>HEX: ${rgb}</p>
        </div>
        </div>
        `;
    })
    .join("");
} // функция создания разметки

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains("color-swatch"); //есть ли у этого елемента класс?

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest(".color-card");

  removeActiveCardClass(); //убрать активный класс
  addActiveCardClass(parentColorCard); // дабавить активный класс
  setBodyBgColor(swatchEl.dataset.hex); // меняет цвет body
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector(".color-card.is-active");

  if (currentActiveCard) {
    currentActiveCard.classList.remove(".is-active");
  }
}

function addActiveCardClass(card) {
  card.classList.add("is-active");
}
