// GLOBAL VARIABLES

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const display = document.querySelector(".display-text-value");
const btn = document.querySelectorAll(".btn");

// ARRAY

const buttons = [
  one, two, three, four, five, six, seven, eight, nine, zero, plus, minus, multiply, divide, decimal];

// BUTTONS FUNCTIONS

buttons.forEach(function (item) {
  item.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "";
      display.textContent += item.textContent;
      console.log(display.textContent);
    } else {
      display.textContent += item.textContent;
      console.log(display.textContent);
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
