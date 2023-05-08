const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (input) => {
    textOutput.textContent = input.currentTarget.value;
  });