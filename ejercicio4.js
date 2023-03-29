let nota = [];

nota.push(parseInt(prompt("ingrese una nota")));
nota.push(parseInt(prompt("ingrese la segunda nota")));
nota.push(parseInt(prompt("ingrese la tercera nota")));

let sum = nota[0] + nota [1] + nota[2];
let res = sum / 3;

document.write(res)
