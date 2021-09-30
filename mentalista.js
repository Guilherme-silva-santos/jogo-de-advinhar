

function Chutar(){
    var numeroSecreto = parseInt(Math.random () * 11);
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt (document.getElementById ("valor").value);
    console.log(chute);
    if(chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou"
    } else if (chute > 10  || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de  0 a 10"
    }
    else {
        elementoResultado.innerHTML = "Errou, o número secreto era  " + numeroSecreto;
    }

}

// essa var dentro da function serve para puxar os dados do html o .value serve para pegar so o valor dentro do input  //
// o parse int serve para transformar uma string em number inteiro//
// o sinal == serve para fazer comparções//
// ja o = faz uma atribuição//
// || serve como "ou"//

// se a var numero secreto estivesse dentro da function tda vezes que clicasse no chutar ia atualizar outro numero//

