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
document.write(
  "El arreglo de ciudades tiene " + ciudades.length + " elementos"
);
mostrar3Ciudades();
agregarUnaCiudadAlFinal();
mostrarUltimoElemento();
mostrarCiudades('');
reemplazarElemento2();
mostrarCiudades('');
function mostrar3Ciudades() {
  document.write("<ul>");
  document.write(`<li>Elemento primera posición: ${ciudades[0]}</li>`);
  if (ciudades.length >= 3) {
    document.write(`<li>Elemento tercera posición: ${ciudades[2]}</li>`);
  }
  document.write(
    `<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`
  );
  document.write("</ul>");
}

function mostrarCiudades() {
    document.write(`<h2>Arreglo de Ciudades</h2>`)
    document.write(`<ul>`)
    for(let i = 0; i < ciudades.length; i++){
        document.write(`<li>${ciudades[i]}</li>`)
    }
    document.write(`</ul>`)
}
function agregarUnaCiudadAlFinal(){
    ciudades.push('Paris');
}
function mostrarUltimoElemento(){
    document.write("<ul>");
    document.write(
        `<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`
      );
      document.write(`<li>Elemento segunda posición: ${ciudades[1]}</li>`);
      document.write("</ul>");
}
function reemplazarElemento2(){
    if(ciudades.length>1){
        ciudades[1]='Barcelona';
    }
   
}