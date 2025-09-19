const getTempCelsius = () => {
    let tempCelsius;
    do{
        tempCelsius = Number(prompt("Introduce la temperatura en grados Celsius"));
        if (isNaN(tempCelsius)) {
                alert("❌ Error: Debes ingresar un número válido.");
            }
    } while(isNaN(tempCelsius));
    return tempCelsius;
}

const celsiusToKelvin = celsius => celsius + 273.15;
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

function printConversions(celsius) {
    console.log("Grados Kelvin:",celsiusToKelvin(celsius));
    console.log("Grados Fahrenheit:", celsiusToFahrenheit(celsius));
}

printConversions(getTempCelsius());