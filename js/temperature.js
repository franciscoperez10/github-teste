const textBox = document.getElementById('textBox');
const celsiusRadio = document.getElementById('celsius');        // Converte de Celsius para Fahrenheit
const fahrenheitRadio = document.getElementById('fahrenheit');  // Converte de Fahrenheit para Celsius
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

function convert() {
    let temperature;
    const inputValue = parseFloat(textBox.value);

    if (isNaN(inputValue)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (celsiusRadio.checked) {
        temperature = (inputValue * 9 / 5) + 32;
        result.textContent = temperature.toFixed(2) + "°F";
    } else if (fahrenheitRadio.checked) {
        temperature = (inputValue - 32) * 5 / 9;
        result.textContent = temperature.toFixed(2) + "°C";
    } else {
        result.textContent = "Please select a unit.";
    }
}

// Liga a função ao clique do botão
convertButton.addEventListener('click', convert);