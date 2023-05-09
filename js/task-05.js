const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    textOutput.textContent = currentTarget.value.trim();
  } else {
    textOutput.textContent = "Anonymous";
  }
};
textInput.addEventListener("input", getInputValue);
