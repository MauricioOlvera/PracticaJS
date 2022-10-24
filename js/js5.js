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
    return res
}

function hacerTabla(tbl, tipo, lon){
    if (tipo == "normal"){
        for(let i=1; i<=lon; i++){
            let res = tbl * i;
            let codigo = '<p>' + tbl + ' X ' + i + ' = ' + res + '</p><br>';
            let p = document.getElementById("resul2")
            p.textContent = codigo;
        }
    }
    else{
        
    }
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