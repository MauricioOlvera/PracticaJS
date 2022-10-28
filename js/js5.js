function operacion(op, n1, n2){
    let res = 0;
    switch (op){
        case "+":
            res = n1 + n2;
            break;

        case "-":
            res = n1 - n2;
            break;

        case "*":
            res = n1 * n2;
            break;

        case "/":
            res = n1 / n2;
            break;
    
        default:
            break;
    }
    return res;
}

function hacerTabla(tbl, tipo, lon){
    switch (tipo) {
        case "normal":
            for(let i=1; i<=lon; i++){
                let res = tbl * i;
                let codigo = '<p>' + tbl + ' X ' + i + ' = ' + res + '</p>';
                document.write(codigo);
            }
            break;

        case "inversa":
            for(let i=lon; i>=1; i--){
                let res = tbl * i;
                let codigo = '<p>' + tbl + ' X ' + i + ' = ' + res + '</p>';
                document.write(codigo);
            }
            break;
    
        default:
            let codigo1 = "No existe ese tipo de tabla"
            break;
    }

    document.write('<p>Recargar la pagina para regresar al menu anterior</p>')

    return codigo1;
}

function calcular(){
    let num1 = parseInt(document.getElementById("num1").value);

    let num2 = parseInt(document.getElementById("num2").value);

    let oper = document.getElementById("operacion").value; 

    let resultado = document.getElementById("resul");

    resultado.value = operacion(oper, num1, num2);
}

function mostrar(){
    let tbl = parseInt(document.getElementById("tabla").value);

    let tipo = document.getElementById("tipo").value;

    let lon = parseInt(document.getElementById("lon").value);

    let resultado2 = document.getElementById("resul2");

    resultado2.value = hacerTabla(tbl, tipo, lon);
}