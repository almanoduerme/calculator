// GLOBAL VARIABLES

const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display-text-value");

// ARRAY

let buttons = Array.from(document.querySelectorAll('.btn'));

// BUTTONS FUNCTIONS

buttons.forEach(function (item) {
  item.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "";
      display.textContent += item.textContent;
    } else {
      display.textContent += item.textContent;
    }
  });
});

// EVENT LISTENERS

clear.addEventListener("click", function () {
  display.textContent = "0";
});

equals.addEventListener("click", function () {
  display.textContent = eval(display.textContent);
  maxLength(display);
});

// FUNCTIONS

const maxLength = function (display) {
  if (display.textContent.length > 9) {
    display.textContent = "Error";
  }
};
