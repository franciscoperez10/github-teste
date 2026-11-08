const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');
const resetButton = document.getElementById('resetButton');
const counterLabel = document.getElementById('counterLabel');

let counter = 0;

increaseButton.onclick = function() {
    counter++;
    counterLabel.textContent = counter;
}

decreaseButton.onclick = function() {
    counter--;
    counterLabel.textContent = counter;
}

resetButton.onclick = function() {
    counter = 0;
    counterLabel.textContent = counter;
}