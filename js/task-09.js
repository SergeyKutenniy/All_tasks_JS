// При клике на кнопку изменяет цвет фона body и значение <span>

const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return (
    (color.textContent = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`) && (document.body.style.backgroundColor = color.textContent)
  );
}

changeColor.addEventListener("click", getRandomHexColor);
