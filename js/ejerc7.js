/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

const numero = parseInt(prompt('Ingrese un número: '));
multiplicar(numero);

function multiplicar(numero) {
 if(isNaN(numero)){
    alert('El valor ingresado es inválido');
 }else{
    document.write('<table border>');
  
    for (let p = 1; p <= 10; p++) {
      const producto = numero * p;
      
      document.write('<tr>');
      for (let j = 0; j < 1; j++) {
        document.write('<td>' + numero + '</td>');
        document.write('<td>' + '*' + '</td>');
        document.write('<td>' + p + '</td>');
        document.write('<td>' + '=' + '</td>');
        document.write('<td>' + producto + '</td>');
      }
      document.write('</tr>');
    }
    
    document.write('</table>');
 }
}


