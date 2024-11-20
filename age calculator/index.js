const result = document.getElementById("result");
const input = document.getElementById("date");
const button = document.getElementById("calculate");
function ageCalculator() {
  const currentYear = new Date().getFullYear();
  const birthYear = input.valueAsDate.getFullYear();
  const age = currentYear - birthYear;
  result.innerText = `${age} years old`;
}

button.addEventListener("click", ageCalculator);
