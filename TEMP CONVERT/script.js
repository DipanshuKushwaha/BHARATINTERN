function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const selectedUnit = document.getElementById("unitSelect").value;
    let convertedTemperature;
    let unitLabel;

    switch (selectedUnit) {
        case "celsius":
            convertedTemperature = inputTemperature;
            unitLabel = "°C";
            break;
        case "fahrenheit":
            convertedTemperature = (inputTemperature - 32) * 5/9;
            unitLabel = "°F";
            break;
        case "kelvin":
            convertedTemperature = inputTemperature - 273.15;
            unitLabel = "K";
            break;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitLabel}`;
}
