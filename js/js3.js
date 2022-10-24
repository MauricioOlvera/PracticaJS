let horaInicial = 5 //prompt("Ingrese la hora inicial de su tratamiento");
let frecuencia = 6 //prompt("Ingrese cada cuanto debe de tomar su mediacamento");
let n = 1;

for(let i=horaInicial; i<=23;){
    let codigo = "<p>La toma no. " + n + " es a la(s): " + i + "hrs</p>";
    document.write(codigo);
    i = i + frecuencia
    n++;
}