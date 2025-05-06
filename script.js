const palabras = ["Innovación", "Códice", "Empatía", "Resiliencia", "Sinergia", "Efímero", "Ímpetu", "Equilibrio"];
const frases = [
  "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
  "Nunca es tarde para aprender algo nuevo.",
  "La creatividad es la inteligencia divirtiéndose.",
  "No cuentes los días, haz que los días cuenten.",
  "La vida comienza donde termina tu zona de confort."
];

function generarPalabra() {
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  document.getElementById("palabra").textContent = palabra;
}

function generarFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = frase;
}

window.onload = () => {
  generarPalabra();
  generarFrase();
};
