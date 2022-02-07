// При вводе текста в инпут - изменяеться текст в <span>, если инпут пустой - <span> по умолчанию "Anonymous"

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const updateValue = (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
};

textInput.addEventListener("input", updateValue);
