const claveapi = "7d6b26cf2d794c8abce172103262109";
const idioma = "es";
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
    const ciudad = inpCiudad.value.trim();
    
    if (!ciudad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveapi}`;

    try {
        const response = await fetch(apiClimaActual);
        
        if (!response.ok) {
            alert('Ciudad no encontrada');
            return;
        }

        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        console.error('Error al obtener el clima:', error);
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.clima-icono').src = "https:" + data.current.condition.icon;
    document.querySelector('.temp').innerHTML = Math.round(data.current.temp_c) + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.Humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}