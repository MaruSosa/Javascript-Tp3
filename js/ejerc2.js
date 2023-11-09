/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/
const ciudades = [];
while (true) {
  const ciudad = prompt("Ingrese una ciudad:");

  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}
//para mostrar 3 ciudades
document.write(
  "El arreglo de ciudades tiene " + ciudades.length + " elementos"
);
document.write("<ul>");
document.write(`<li>Elemento primera posición: ${ciudades[0]}</li>`);
if (ciudades.length >= 3) {
  document.write(`<li>Elemento tercera posición: ${ciudades[2]}</li>`);
}
document.write(
  `<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`
);
document.write("</ul>");
//agregar cuiudad Paris
ciudades.push("Paris");
document.write(
  `<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`
);
document.write("</ul>");
//Mostrar el elemento de la segunda posicion
document.write(`<li>Elemento segunda posición: ${ciudades[1]}</li>`);
document.write("</ul>");
//mostrar todas las ciudades
document.write(`<h2>Arreglo de Ciudades</h2>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ul>`);

//Reemplazar el elemento 2
if (ciudades.length > 1) {
  ciudades[1] = "Barcelona";
}
document.write("</ul>");
//mostrar todas las ciudades
document.write(`<h2>Arreglo de Ciudades</h2>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ul>`);
