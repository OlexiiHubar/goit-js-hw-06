const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const counterNumber = document.getElementById('value');
let counterValue = 0;

incrementBtn.addEventListener('click', addNumberToValue)
decrementBtn.addEventListener('click', subtractNumberToValue)

function addNumberToValue() {
    counterValue += 1;
    counterNumber.textContent = counterValue;
}

function subtractNumberToValue() {
    counterValue -= 1;
    counterNumber.textContent = counterValue;
}

