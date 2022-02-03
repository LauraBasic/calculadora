function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}

function clean(){  // BOtão de limpar
    document.getElementById("resultado").innerHTML = "";
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(document.getElementById("resultado").innerHTML);
    }
    else{
        document.getElementById("resultado").innerHTML = "Nada...";
    }
}

