// script.js

// Variables globales
let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = "";

// Evento load
window.addEventListener('load', init);

// Evento click
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function init() {
  // Selección de palabra aleatoria
  palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

  // Inicializar la interfaz de usuario
  renderUI();
}

function intentar() {
  const intento = leerIntento();

  if (intento === palabra) {
    terminar("<h1>¡GANASTE! 😄</h1>");
    return;
  }

  renderIntento(intento);

  intentos--;

  if (intentos === 0) {
    terminar("<h1>¡PERDISTE! 😢</h1>");
  }
}

function leerIntento() {
  let intento = document.getElementById("guess-input").value;
  intento = intento.toUpperCase();
  return intento;
}

function renderIntento(intento) {
  const grid = document.getElementById("grid");
  const row = document.createElement('div');
  row.className = 'row';

  for (let i = 0; i < palabra.length; i++) {
    const span = document.createElement('span');
    span.className = 'letter';

    if (intento[i] === palabra[i]) {
      span.innerHTML = intento[i];
      span.style.backgroundColor = '#79b851'; // Verde
    } else if (palabra.includes(intento[i])) {
      span.innerHTML = intento[i];
      span.style.backgroundColor = '#f3c237'; // Amarillo
    } else {
      span.innerHTML = intento[i];
      span.style.backgroundColor = '#a4aec4'; // Gris
    }

    row.appendChild(span);
  }

  grid.appendChild(row);
}

function renderUI() {
  // Puedes agregar aquí cualquier inicialización de la interfaz de usuario si es necesario.
}

function terminar(mensaje) {
  const input = document.getElementById("guess-input");
  const button = document.getElementById("guess-button");
  input.disabled = true;
  button.disabled = true;

  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}

