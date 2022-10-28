let horaInicial = 5
let frecuencia = 6
let n = 1;

for(let i=horaInicial; i<=23;){
    let codigo = "<p>La toma no. " + n + " es a la(s): " + i + "hrs</p>";
    document.write(codigo);
    i = i + frecuencia
    n++;
}