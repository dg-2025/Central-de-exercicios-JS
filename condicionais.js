// Nível Básico

function condicionalBasico01() {
    let idade = prompt("digite sua idade: ")
    if (idade >= 18) {
        alert("ja pode ser preso")
    } else {
        alert("menor de idade")
    }
    gerarLog("exercicio de maioridade executado às " + new Date().toLocaleString())
}

function condicionalBasico02() {
    let numero = prompt("digite um numero")
    if (numero > 0) {
        alert("positivo.")
    } else if (numero < 0) {
        alert("negativo")
    }
}

function condicionalbasico03() {
    let nota = prompt("digiti sua nota: ")
    if (nota < 0 || nota > 100) {
        alert("nota invalida")
    } else if (nota >= 60) {
        alert("aprovado")
    } else {
        alert("reprovado!")
    }
}

function condicionalBásico04() {
    let numero = prompt("digite um numero")
    if (numero > 0) {
        alert("positivo.")
    } else if (numero < 0) {
        alert("negativo")
    } else {
        alert("é zero")
    }
}

function condicionalBásico05() {
    let idade = prompt("digite sua idade")
    if (idade >= 0 && idade <= 12) {
        alert("Ciança")
    } else if (idade >= 13 && idade <= 17) {
        alert("Adolescente")
    } else if (idade > 18) {
        alert("Adulto")
    }
}

function condicionalBásico06() {
    let numero = prompt("digite um numero")
    if (numero % 2 == 0) {
        alert("par")
    } else {
        alert("impar")
    }
}

// Nível Intermediário

function condicionalIntermediario01() {
    let n1 = prompt("fale um numero")
    let n2 = prompt("fale outro numero")
    let operador = prompt("escolha uma operação")
    if (operador == "+") {
        alert(Number(n1) + Number(n2))
    } else if (operador == "-") {
        alert(Number(n1) - Number(n2))
    } else if (operador == "*") {
        alert(Number(n1) * Number(n2))
    } else if (operador == "/") {
        alert(Number(n1) / Number(n2))
    }
}

function condicionalintermediario02() {
    let n1 = prompt("fale um numero")
    let n2 = prompt("fale outro numero")
    let n3 = prompt("fale o ultimo numero")
    if (n1 > n2 && n1 > n3) {
        alert(n1 + " é seu maior numero")
    } else if (n2 > n1 && n2 > n3) {
        alert(n2 + " é seu maior numero")
    } else {
        alert(n3 + " é seu maior numero")
    }
}

function condicionalintermediario03() {
    let valor = prompt("digite um valor!: ")
    if (valor >= 100) {
        alert((Number(valor) * 90) / 100)
    } else {
        alert(valor)
    }
}

function condicionalintermediario04() {
    let usuario = prompt("digite seu usuario")
    let senha = prompt("digite su senha")
    if (usuario == "admin" && senha == "1234") {
        alert("seja bem vindo: " + usuario)
    } else {
        alert("conta invalida")
    }
}

// Nível Avançado

function condicionalAvancado01() {
    let lado1 = prompt("insira o tamanho de um lado do tringolo")
    let lado2 = prompt("insira o tamanho de outro lado do tringolo")
    let lado3 = prompt("insira o tamanho de ultimo lado do tringolo")
    if (lado1 == lado2 && lado1 == lado3) {
        alert("triângulo equilatero")
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        alert("triângulo isósceles")
    } else {
        alert("triângulo escaleno")
    }
}

function condicionalAvancado02() {
    let nota = Number(prompt("insira sua nota"))
    if (nota >= 90 && nota <= 100) {
        alert("A")
    } else if (nota >= 80 && nota <= 89) {
        alert("B")
    } else if (nota >= 70 && nota <= 79) {
        alert("C")
    } else if (nota >= 60 && nota <= 69) {
        alert("D")
    } else {
        alert("F")
    }
}

// Logs
function gerarLog(textoDoLog) {
    let container = document.querySelector(".logs-container")
    let paragraph = document.createElement("p")
    paragraph.innerHTML = textoDoLog
    container.appendChild(paragraph)
}
