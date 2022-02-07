// Создает простой счетчик по кнопкам

const btnIncrement = document.querySelector("[data-action=increment]");
const btnDecrement = document.querySelector("[data-action=decrement]");
const value = document.querySelector("#value");

let counterValue = 0;

const render = () => {
  value.textContent = counterValue.toString();
};

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  render();
});

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  render();
});

render();
