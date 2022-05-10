//********* ejercicio original *********/

//contador = 1;
/*while(contador<=10) {
  nota = Number(prompt("Ingrese una nota:"));
  suma = suma + nota;
  contador = contador + 1;
}
promedio = suma / 10
console.log("El promedio de las notas es:" + promedio);*/

/*for(num = inicial; <condicion>; incremento) {
  <instruccion>
} */

let nota, suma, promedio, contador: number;
suma = 0;

//contador++ es el incremento
//suma = suma + nota lo convierto a suma += nota

for (contador = 1; contador <= 10; contador++) {
  nota = Number(prompt("Ingrese una nota:"));
  suma += nota;
}
promedio = suma / 10;
console.log("El promedio de las notas es:" + promedio);
