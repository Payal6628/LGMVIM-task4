function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteDigit() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  var display = document.getElementById("display");
  var expression = display.value;

  try {
    var result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  var key = event.key;
  var validKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    "Enter",
    "Backspace",
  ];

  if (validKeys.includes(key)) {
    event.preventDefault();
    if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      deleteDigit();
    } else {
      appendValue(key);
    }
  }
});
