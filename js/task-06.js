// Делает рамку инпута зеленым если введено больше 6 символов, если меньше 6 символов - рамка красная

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = event.currentTarget.dataset.length;

  this.classList.add("invalid");
  this.classList.remove("valid");

  if (valueLength >= requiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
}
