const textInput = document.querySelector("#validation-input");
const inputLength = textInput.getAttribute("data-length");
textInput.addEventListener("blur", (event) => {
  const valueLength = event.target.value.trim().length;
  const validationClass = function (addClass, removeClass) {
    textInput.classList.add(addClass);
    textInput.classList.remove(removeClass);
  };
  if (Number(inputLength) === valueLength) {
    validationClass("valid", "invalid");
  } else {
    validationClass("invalid", "valid");
  }
});
