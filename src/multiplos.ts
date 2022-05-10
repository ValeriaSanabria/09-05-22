let multiplo: number = i

for (i=1; i<=100; i++) {
  multiplo = Number(prom("Ingrese un numero:"));
  if (multiplo % 2) {
    console.log("Es multiplo de 2");
    break;
  } else (multiplo % 3) {
    console.log("Es multiplo de 3");
  }
}