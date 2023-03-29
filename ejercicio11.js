// problema 
// la institucion educativa ABC Pequeños Gigantes, Lo a contratado para diseñar un scrip en  Javascript, la cual le permita capturar los nombres y los apellidos de un alumno, captura 3 notas, calcular su promedio de la siguiente forma: naota 1= 30%, nota 2=30%, nota 3=40%


let nombre = prompt("escriba su nombre")
let apellido = prompt("escriba su nombre")

let nota1 = parseFloat(prompt("escriba su nota"));
while (nota1 < 0 || nota1 > 5 || isNaN(nota1)) {
    nota1 = parseFloat(prompt("la nota debe estar entre 0 y 5 porfavor ingrese nuevamente la nota "))
};
let nota2 = parseFloat(prompt("escriba su nota"));
while (nota2 < 0 || nota2 > 5 || isNaN(nota2)) {
    nota2 = parseFloat(prompt("la nota debe estar entre 0 y 5 porfavor ingrese nuevamente la nota "))
};
let nota3 = parseFloat(prompt("escriba su nota"));
while (nota3 < 0 || nota3 > 5 || isNaN(nota3)) {
    nota3 = parseFloat(prompt("la nota debe estar entre 0 y 5 porfavor ingrese nuevamente la nota "))
};

let notas1 = nota1 * 0.3;

let notas2 = nota2 * 0.3;
let notas3 = nota3 * 0.4;
let promedio = (notas1 + notas2 + notas3);

if (promedio <= 0) {
    alert("perdio")
}
else if (promedio <= 5) {

    document.write(nombre + apellido + promedio);
}
else {
    document.write("invalido")
};