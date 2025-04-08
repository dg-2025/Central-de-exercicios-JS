// Nível Básico

// Verificar maioridade
function Basico01() {
    let idade = prompt("digite sua idade: ")
    if (idade >= 18) {
        console.log("ja pode ser preso")
    }
    else {
        console.log("menor de idade")
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Verificar se um número é positivo ou negativo:
function Basico02() {
    let numero = prompt("digite um numero")
    if (numero > 0) {

        console.log("positivo.")

    }
    else {
        if (numero < 0) {
            console.log("negativo")
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Aprovação em uma prova:
function basico03() {
    let nota = prompt("digiti sua nota: ")
    if (nota < 0 || nota > 100) {
        console.log("nota invalida")
    }
    else if (nota >= 60) {
        console.log("aprovado")
    }
    else if (nota < 60) {
        console.log("reprovado!")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Verificar se um número é positivo, negativo ou zero:
function Básico04() {
    let numero = prompt("digite um numero")
    if (numero > 0) {

        console.log("positivo.")

    }
    else {
        if (numero < 0) {
            console.log("negativo")
        } else {

            console.log("é zero")
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Classificação de idade:
function Básico05() {
    let idade = prompt("digite sua idade")
    console.log(idade)
    if (idade >= 0 && idade <= 12) {
        console.log("Ciança")
    }
    else if (idade >= 13 && idade <= 17) {
        console.log("Adolescente")
    }
    else if (idade > 18) {
        console.log("Adulto")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Verificar se um número é par ou ímpar:
function Básico06() {
    let numero = prompt("digite um numero")
    console.log(numero)
    if (numero % 2 == 0) {
        console.log("par")

    } else {
        console.log("impar")
    }
}

// ***********************************************************************************************************************************

// Nível Intermediário

// Calculadora simples:
function Intermediario01() {
    let n1 = prompt("fale um numero")
    let n2 = prompt("fale outro numero")
    let operador = prompt("escolha uma operação")
    if (operador == "+") {
        let soma = Number(n1) + Number(n2)
        alert(soma)
    }
    else if (operador == "-") {
        let subtracao = Number(n1) - Number(n2)
        alert(subtracao)
    }
    else if (operador == "*") {
        let multiplicacao = Number(n1) * Number(n2)
        alert(multiplicacao)
    }
    else if (operador == "/") {
        let divisao = Number(n1) / Number(n2)
        alert(divisao)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function intermediario02() {
    debugger
    let n1 = prompt("fale um numero")
    let n2 = prompt("fale outro numero")
    let n3 = prompt("fale o ultimo numero")
    if (n1 > n2 && n1 > n3) {
        alert(n1 + " é seu maior numero")
    }
    else if (n2 > n1 && n2 > n3) {
        alert(n2 + " é seu maior numero")
    }
    else if (n3 > n1 && n3 > n2) {
        alert(n3 + " é seu maior numero")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function intermediario03() {

    let valor = prompt("digite um valor!: ")
    if (valor >= 100) {
        valor = (Number(valor) * 10) / 100 - Number(valor)
        alert(valor)
    }
    else {
        alert(valor)
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////

function intermediario04() {

    let usuario = prompt("digite seu usuario")
    let senha = prompt("digite su senha")
    if (usuario == "admin" && senha == "1234") {
        alert("seja bem vindo: " + usuario)
    }
    else {
        alert("conta invalida")
    }
}


// ***********************************************************************************************************************************

//Nível Avançado

function Avancado01() {
    debugger
    let lado1 = prompt("insira o tamanho de um lado do tringolo")
    let lado2 = prompt("insira o tamanho de outro lado do tringolo")
    let lado3 = prompt("insira o tamanho de ultimo lado do tringolo")
    if (lado1 == lado2 == lado3) {
        alert("triângulo equilatero")
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        alert("triângulo isósceles")
    }
    else if (lado1 != lado2 != lado3) {
        alert("triângulo escaleno")

    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function Avancado02() {
    let nota = Number(prompt("insira sua nota"))
    if (nota >= 90 && nota <=100) {
        alert ("A")
    }
    else if (nota >= 80 && nota <=89) {
        alert ("B")
    }
    else if  (nota >= 70 &&  nota <=79) {
        alert ("C")
    }
    else if (nota >= 60 && nota <=69) {
        alert ("D")
    }
    else if (nota <60 ) {
        alert ("F")
    }
}
