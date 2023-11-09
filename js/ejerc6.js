/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/
const lado1= parseFloat(prompt('Ingrese el valor de uno de los lado'));
const lado2= parseFloat(prompt('Ingrese el valor del siguiente lado'));
perimetro(lado1,lado2);

function perimetro(lado1,lado2){
  if(isNaN(lado1)){
   alert('Valor inválido');
  }
  else{
   const perimetro=2*(lado1+lado2);
   document.write('El perimetro del rectangulo es: '+perimetro);
  }
}
