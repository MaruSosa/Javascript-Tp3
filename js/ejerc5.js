/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

const cadena = prompt('Ingrese una cadena de texto');
analizarCadena(cadena);

function analizarCadena(cadena) {
    if (cadena === null) {
        document.write("Operación cancelada por el usuario.");
    } else if (cadena === "") {
        document.write("Error: Debes ingresar una cadena de texto válida.");
    } else if (cadena === cadena.toUpperCase()) {
        document.write("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
       document.write("La cadena está formada solo por minúsculas.");
    } else {
        document.write("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
}