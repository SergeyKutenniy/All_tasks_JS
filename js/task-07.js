// При перетаскивании ползунка изменяется размер шрифта

const rng = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rng.addEventListener("input", fontSize);

function fontSize() {
  text.style.fontSize = rng.value + "px";
}
