const textInput = document.querySelector("#validation-input");
const inputLength = textInput.getAttribute("data-length");
textInput.addEventListener("blur", (event) => {
  const valueLength = event.target.value.trim().length;
  if (Number(inputLength) === valueLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
