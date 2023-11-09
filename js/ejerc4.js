/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

const numero = parseInt(prompt("Ingrese un número:"));
const resultado =parImpar(numero);
function parImpar(numero) {
  if (isNaN(numero)) {
     return document.write("El valor ingresado no es un número válido.");
  } else {
    if (numero % 2 == 0) {
     return document.write(`El número ${numero} es par`);
    } else {
     return document.write(`El número ${numero} es impar`);
    }
  }
}
