/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/
const sumas = [];
const apariciones = [];
lanzarDados();

function lanzarDados() {
    for (let i = 0; i < 50; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const suma = dado1 + dado2;
        if (suma >= 2 && suma <= 12) {
            const cont = sumas.indexOf(suma);
            if (cont !== -1) {  
                apariciones[cont]++;
            } else {
                sumas.push(suma);
                apariciones.push(1);
            }
        }
    }

    document.write('<table border>');
    document.write('<tr>');
    document.write('<th>Suma</th>');
    document.write('<th>Apariciones</th>');
    document.write('</tr>');
    for (let i = 2; i <= 12; i++) {
        document.write('<tr>');
        document.write('<td>' + i + '</td>');
        const cont = sumas.indexOf(i);
        if (cont !== -1) {
            document.write('<td>' + apariciones[cont] + '</td>');
        } else {
            document.write('<td>0</td>');
        }

        document.write('</tr>');
    }

    document.write('</table>');
}