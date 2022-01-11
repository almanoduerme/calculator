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

// EVENT LISTENERS

/*
btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (display.textContent === "0") {
      display.textContent = "";
      display.textContent += btn.textContent;
      console.log(display.textContent);
    } else {
      display.textContent += btn.textContent;
      console.log(display.textContent);
    }
  });
});
*/

zero.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "";
    display.textContent += zero.textContent;
  } else {
    display.textContent += zero.textContent;
  }
});

one.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 1;
  } else {
    display.textContent += 1;
  }
});

two.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 2;
  } else {
    display.textContent += 2;
  }
});

three.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 3;
  } else {
    display.textContent += 3;
  }
});

four.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 4;
  } else {
    display.textContent += 4;
  }
});

five.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 5;
  } else {
    display.textContent += 5;
  }
});

six.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 6;
  } else {
    display.textContent += 6;
  }
});

seven.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 7;
  } else {
    display.textContent += 7;
  }
});

eight.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 8;
  } else {
    display.textContent += 8;
  }
});

nine.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += 9;
  } else {
    display.textContent += 9;
  }
});

// OPERADORES

divide.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += "/";
  } else {
    display.textContent += "/";
  }
});

multiply.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += "*";
  } else {
    display.textContent += "*";
  }
});

minus.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += "-";
  } else {
    display.textContent += "-";
  }
});

plus.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += "+";
  } else {
    display.textContent += "+";
  }
});

decimal.addEventListener("click", function () {
  if (display.textContent == 0) {
    display.textContent = "";
    display.textContent += ".";
  } else {
    display.textContent += ".";
  }
});

clear.addEventListener("click", function () {
  display.textContent = "0";
});

equals.addEventListener("click", function () {
  display.textContent = eval(display.textContent);
});
