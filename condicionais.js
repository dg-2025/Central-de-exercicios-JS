// Nível Básico

// Verificar maioridade
function exercicio01() {
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
function exercicio02() {
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
function exervivio03() {
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
function exercicio04() {
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
function exercicio05() {
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
function exercicio06() {
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
function exercicio06() {
    let  n1 = prompt ("fale um numero")
    let  n2 = prompt ("fale outro numero")
    let operador = prompt ("escolha uma operação")
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

  function exercicio07 () {
    debugger
    let  n1 = prompt ("fale um numero")
    let  n2 = prompt ("fale outro numero")
    let  n3 = prompt ("fale o ultimo numero")
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

   function exercicio08 () {

    let valor = prompt ("digite um valor!: ")
    if (valor >= 100) {
         valor = (Number(valor) * 10)/100 - Number(valor)
        alert(valor)
    }
    else {
        alert(valor)
    }

   }
   exercicio08 ()