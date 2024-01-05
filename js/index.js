console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const numberA = Number(event.target.elements.numberA.value); // der value von einem input feld ist immer ein string!!!
  const numberB = Number(event.target.elements.numberB.value); // der value von einem input feld ist immer ein string!!!

  let result;

  if (data.operator === "addition") {
    result = add(numberA, numberB);
  } else if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (data.operator === "division") {
    result = divide(numberA, numberB);
  } else {
    result = "ungültig";
  }

  resultOutput.textContent = result;
});
