function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        document.getElementById('calculation').value = 'Silakan masukkan nilai suhu dalam Celcius.';
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = `${celsius}°C × (9 / 5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        document.getElementById('calculation').value = 'Silakan masukkan nilai suhu dalam Fahrenheit.';
        return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').value = `${fahrenheit}°F - 32 × (5 / 9) = ${celsius.toFixed(2)}°C`;
}

function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

function reverseConversion() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;
    document.getElementById('celsius').value = fahrenheit;
    document.getElementById('fahrenheit').value = celsius;
    if (fahrenheit !== '') {
        convertToCelsius();
    } else if (celsius !== '') {
        convertToFahrenheit();
    }
}
