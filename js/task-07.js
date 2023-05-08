const fontSizeValue = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeValue.addEventListener("input", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
});
