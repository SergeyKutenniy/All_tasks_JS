// При нажатии на кнопку create, создаются квадраты, каждый следующий больше на 10px и другого цвета. При клике на destroy - квадраты исчезают

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let initialSizeOfBox = 30;

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesParent: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls").firstElementChild,
};

refs.createBtn.addEventListener("click", createBtnListener);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBtnListener() {
  const amountOfBoxes = createBoxes(refs.inputEl.value);
  refs.boxesParent.append(...amountOfBoxes);
}

function createBoxes(amount) {
  let sizeOfBox = 0;
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.display = "block";
    sizeOfBox = initialSizeOfBox + i * 10;
    boxEl.style.width = `${sizeOfBox}px`;
    boxEl.style.height = `${sizeOfBox}px`;
    boxElements.push(boxEl);
  }
  initialSizeOfBox = sizeOfBox + 10;
  return boxElements;
}

function destroyBoxes() {
  refs.boxesParent.innerHTML = "";
  initialSizeOfBox = 30;
}
