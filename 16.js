
let arreglo=[
    "Grooo.jpg",
    "astronauta.jpg",
    "imagen2.jpg",
];

function cambieimagen(pos){
    let imgcambio = document.getElementById("imgcambio")
    imgcambio.src = arreglo[pos];
}