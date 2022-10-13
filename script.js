/* Exercício 15 - Desafio

● Verifique se o número é primo!
● Um número primo, é um número natural, maior que 1 e apenas
divisível por si próprio e por 1; 

newFunction();

function primo() {
    var num = parseInt(document.getElementById("num").value);
    var answer = document.getElementById("answer");
    var divider = 0;

    for(var count = 1; count<=num; count++);
    if (num % count == 0)
    divider++; 
    if(divider==2) 
        answer.innerHTML = "primo";

    else answer.innerHTML = "não primo"  
}


exibirNumerosPrimos(25);
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero  <= limite; numero++){
    if(exibirNumerosPrimos(numero)) console.log(numero);
}
    }
function NumerosPrimos(_numero){
    for(let divider = 2; divider <= _numero; divider++){
        if(_numero % divider === 0){
            return false

        }
    }
    return true;
}


exibirNumerosPrimos(25);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(NumerosPrimo(numero)) console.log(numero);
    }
}


function NumerosPrimo(numero){
    for(let divisor =2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
} */

let num = parseInt(prompt('Digite um número:'));
let i = 1;
    if(num % num == 0 && num % i == 0 && num % 2 !==0){
        alert(`Número ${num} é primo`);
    }else{
        alert(`Número ${num} não é primo`)        
    } 


   /* function exibirNumerosPrimos(limite) {
        let num = parseInt(prompt('Digite um número:'));
        let i = 1;    
        for (let numero = 2; numero <= limite; numero++) {

            if (ehPrimo(numero)) console.log(numero);
        }
    }

    function ehPrimo(numero) {

        var divider = 0;

        for (let count = 1; count <= numero; count++) {

            if (numero % count == 0)
                divider++;
        }

        if(divider == 2) {

            return true
        }

        return false;
    }


    exibirNumerosPrimos(25);*/
