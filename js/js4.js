function divisores(numero) {
    let total = 0;
    for (let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}

function src (numero){
    let imagen = ""
    switch (numero) {
        case 1:
            imagen = "https://images.sk-static.com/images/media/profile_images/artists/3821916/huge_avatar";
            break;

        case 2:
            imagen = "https://i.discogs.com/Vi5Q2RPLp3QM2zpp6_ANS1wGgB-rfy4J2Aj1KI9ItMs/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwOTUy/MTAtMTYzNjE0NTAw/NS0zNzE5LmpwZWc.jpeg"
            break;

        case 3:
            imagen = "https://yt3.ggpht.com/h97n6FCo06aQ-TIwW9qzSc5sLwWVdjfCTw8ISj0mUZIAj3iGKxXVdhwXLj2U-tclhSMNEPZhjQ=s900-c-k-c0x00ffffff-no-rj"
            break;

        case 4:
            imagen = "https://static.wikia.nocookie.net/electropedia/images/f/fa/PopoterRobinson_xD.png/revision/latest?cb=20170606173235&path-prefix=es"
            break;

        case 5:
            imagen = "https://4.bp.blogspot.com/-QTdLXH6212A/Wh7rlK6vWHI/AAAAAAAACBY/G1MbwjEHA2UUjNefaNxMfAm-rkIqv9HaACLcBGAs/s1600/porter%2Brobinson%2Bvirtual%2Bself%2Bep.jpg"
            break;
        
        default:
            imagen = "https://educacion30.b-cdn.net/wp-content/uploads/2018/02/mistake.jpg"
            break;
    }

    return imagen;
}

const divisoresV2 = function(numero){
    let total = 0;
    for (let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

const divisoresV3 = numero => {
    let total = 0;
    for (let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = parseInt(document.getElementById("numero").value); 

    let resultado = document.getElementById("resul");

    resultado.value = divisores(numero);
}

function mostrar(){
    let numero = parseInt(document.getElementById("numero2").value);

    let imagen = document.getElementById("imagen");

    imagen.src = src(numero);

}

console.log("Total divisores", divisores(32));
console.log("Total divisores", divisoresV2(32));
console.log("Total divisores", divisoresV3(32));