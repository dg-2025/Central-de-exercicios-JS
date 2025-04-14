// FOR
function exemploFor() {
    for (let contador = 1; contador <= 5; contador++) {
        alert(contador);
    }
}

// WHILE
function exemploWhile() {
    let contador = 1;
    while (contador <= 5) {
        console.log(contador);
        contador++;
    }
}

// DO WHILE
function exemploDoWhile() {
    let contador = 1;
    do {
        alert(contador);
        contador++;
    } while (contador <= 5);
}

// Nível Básico

function repeticoesBasico01() {
    for (let contador = 1; contador <= 10; contador++) {
        alert(contador);
    }
}

function repeticoesBasico02() {
    let numero = Number(prompt("insira um numero"));
    for (let contador = 1; contador <= 10; contador++) {
        alert(numero * contador);
    }
}

function repeticoesBasico03() {
    let numero = Number(prompt("insira um numero"))
    let contador = 1
    let soma = 0
    if (numero >= 0) {
        while (contador <= numero) {
            soma += contador;
            contador++
        }
        alert(soma)
    } else {
        alert("numero nao e natural")
    }
}

// Nível Intermediário

function repeticoesIntermediario01() {
    let contador = 1;
    while (contador <= 50) {
        if (contador % 2 == 0) {
            console.log(contador);
        }
        contador++;
    }
}

function repeticoesIntermediario02() {
    let numero = Math.floor(Math.random() * 100);
    let valor;
    while (valor != numero) {
        valor = Number(prompt("insira um numero"));
        if (valor < numero) {
            alert("mais");
        } else if (valor > numero) {
            alert("menos");
        }
    }
    alert("acerto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

function repeticoesIntermediario03() {
    let numero = Number(prompt("digite um numero"))
    while (numero != 0) {
        alert(numero);
        numero > 0 ? numero-- : numero++;
    }
}

// Nível Avançado

function repeticoesAvancado01() {
    let numero = prompt("digite um numero positivo inteiro")
    let soma = 0;
    for (let i = 0; i < numero.length; i++) {
        soma += Number(numero[i]);
    }
    alert(soma)
}

function repeticoesAvancado02() {
    let numero = Number(prompt("digite um numero"))
    let multiplicacao = 1
    while (numero > 0) {
        multiplicacao *= numero
        numero--
    }
    alert(multiplicacao)
}
