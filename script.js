const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

function updateDisplay() {
  display.textContent = input || "0";
}

function calculate() {
  try {
    input = eval(input).toString();
  } catch {
    input = "Error";
  }
  updateDisplay();
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (val === "C") {
      input = "";
    } else if (val === "⌫") {
      input = input.slice(0, -1);
    } else if (val === "=") {
      calculate();
      return;
    } else {
      input += val;
    }

    updateDisplay();
  });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";
  if (allowedKeys.includes(e.key)) {
    input += e.key;
    updateDisplay();
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    input = input.slice(0, -1);
    updateDisplay();
  } else if (e.key === "Escape") {
    input = "";
    updateDisplay();
  }
});
