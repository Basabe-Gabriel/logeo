let intentos: number = 0;

let respuesta: string = "";

while (intentos <= 3 && respuesta !== "eureka") {
  respuesta = prompt("ingrese la contraseña");
  intentos = intentos + 1;
}

if (respuesta === "eureka") {
  console.log("en hora buena has ingresado");
} else {
  console.log("cagaste");
}
console.log(intentos);
