function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
      let result;
      if (display.value.includes('^')) {
          const parts = display.value.split('^');
          const base = parseFloat(parts[0]);
          const exponent = parseFloat(parts[1]);
          if (!isNaN(base) && !isNaN(exponent)) {
              result = calculateExponent(base, exponent);
          } else {
              result = "ERROR!";
          }
      } else if (display.value.includes('mod')) {
        const parts = display.value.split('mod');
        const base = parseFloat(parts[0]);
        const modul = parseFloat(parts[1]);
          if (!isNaN(base) && !isNaN(modul)) {
            result = (base % modul).toString();
          } else {
            result = "ERROR!";
          }
      }
      else {
          result = eval(display.value);
      }

      display.value = result;

  } catch (error) {
      display.value = "ERROR!";
  }
}

function sqrt() {
  const display = document.getElementById("display");
  const result = Math.sqrt(eval(display.value));
  display.value = result;
}

function percentage() {
  const display = document.getElementById("display");
  const result = eval(display.value) / 100 ;
  display.value = result;
}
function calculateExponent(base, exponent) {
  return Math.pow(base, exponent);
}

function doBackspace() {
  display.value = display.value.slice(0, -1);
}

var x = document.getElementById('scientific');
var number = 1;

function scientificScreen() {
 
  if(number == 1) {
    x.style.display = 'block' ;
    number = 0;
  }
  else
  {
    x.style.display = 'none';
    number = 1;
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const display = document.getElementById("display");

  if (!isNaN(key) || key === "." || key ==="^") {
    appendToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
