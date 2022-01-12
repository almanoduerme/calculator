// GLOBAL VARIABLES

const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display-text-value");

// ARRAY

let buttons = Array.from(document.querySelectorAll('.btn'));

// BUTTONS FUNCTIONS

buttons.forEach((item) => {
  item.onclick = () => {
    if (display.textContent === "0") return display.textContent = item.textContent
    return display.textContent += item.textContent
  }
});

// EVENT LISTENERS

clear.addEventListener("click", function () {
  display.textContent = "0";
});

equals.addEventListener("click", function () {
  display.textContent = eval(display.textContent);
  if (display.textContent.length > 9) {
    display.textContent = "Error";
  }
});