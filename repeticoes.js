function exemploFor() {

    // FOR
    // 1o = Declarar contador.
    // 2o = Condição (enquanto).
    // 3o = Incremento.

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    for (let contador = 1; contador <= 5; contador++) {
        alert(contador);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function exemploWhile() {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador++;

    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function exemploDoWhile() {

    let contador = 1;

    do {

        alert(contador);
        contador++;

    } while (contador <= 5);
}
// ***********************************************************************************************************************************
// Nível Básico

// 1.Contagem de 1 a 10:
function exercicio01() {
    for (let contador = 1; contador <= 10; contador++) {
        alert(contador);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 2.Tabuada de um número:
function exercicio02() {
    let numero = Number(prompt("insira um numero"));
    for (let contador = 1; contador <= 10; contador++) {
        let resultado = (numero * contador);
        alert(resultado);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 3.Soma dos primeiros N números naturais:
function exercicio03() {
    let numero = Number(prompt("insira um numero"))
    let contador = 1
    let soma = 0
    if (numero >= 0) {
        while (contador <= numero) {
            soma = Number(soma) + Number(contador)
            contador++
        }
        alert(soma)
    }
    else { alert("numero nao e natural") }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Nível Intermediário

// 1.Exibir os números pares de 1 a 50:
function exercicio04() {


    let contador = 1;

    while (contador <= 50) {
        if (contador % 2 == 0) {
            console.log(contador);
        }
        contador++;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 2.Jogo de adivinhação:
function exercicio05() {
    debugger
    let numero = Math.floor(100 * Math.random(+1));
    let valor;
    while (valor != numero) {
        valor = Number(prompt("insira um numero"));
        if (valor < numero) { alert("mais")  }
        else if (valor > numero) { alert("menos") }


    }
    alert("acerto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 3.Contagem regressiva:
function exercicio05() {
    let numero = Number(prompt("digite um numero"))
    while (numero != 0) {
        if (numero > 0) {
            alert(numero)
            numero--
        }
        else if (numero < 0 ) {    
            alert(numero)
            numero++
        }
    }
}
// ***********************************************************************************************************************************
// Nível Avançado

// Soma dos dígitos de um número: 
    // numero = "34"
    // numero[0]
    // => 3
    // numero[1]

function Avancado01 () {
    // 1.Soma dos dígitos de um número:
    debugger
    let numero = prompt("digite um numero positivo inteiro")
    let contador = 0; 
    let soma = 0;
    while (contador < numero.length) {
        let digito = numero[contador];
        soma = Number(soma) + Number(digito);
        contador++
    }
    alert(soma)
}

    // 2.Fatorial de um número:

function Avancado02 () {
    debugger
    let numero = prompt("digite um numero")
    let multiplicacao = 1
    while (numero != 0) {
         multiplicacao = multiplicacao * numero 
        numero = numero - 1
    }
    alert(multiplicacao)
}

