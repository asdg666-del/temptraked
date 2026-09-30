const claveApi = '7d6b26cf2d794c8abce172103262109';
const idioma = 'es';
const ciudad = 'Huancayo';


const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data);