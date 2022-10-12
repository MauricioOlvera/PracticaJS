let horaInicial = prompt("Ingrese la hora inicial de su tratamiento");
let frecuencia = prompt("Ingrese cada cuanto debe de tomar su mediacamento");
let n = 1;

for(let i=horaInicial; i<=23; i++){
    let codigo = "<p>La toma no. " + n + " es a la(s): " + i + "hrs</p>";
    document.write(codigo);
    //console.log("La toma no. ", n, "Es a las ", i);
    n = n + 1;
}