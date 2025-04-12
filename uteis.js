function exemplodefilter() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let numerosfiltrados = numeros.filter(numero => numero >= 2);
    console.log (numerosfiltrados)

}




// ***********************************************************************************************************************************
// *                                                                                                                                *
// *   ███████ ██ ██      ████████ ███████ ██████                             *
// *   ██      ██ ██         ██    ██      ██   ██                            
// *   █████   ██ ██         ██    █████   ██████                               *
// *   ██      ██ ██         ██    ██      ██   ██                             *
// *   ██      ██ ███████    ██    ███████ ██   ██                                    *
// *                                                                                                                                *
// ***********************************************************************************************************************************

// ***********************************************************************************************************************************
// Nível Básico

function basicoFILTER01 () {
    const numeros = [5, 8, 12, 15, 3, 20, 7]
    const maiordex = numeros.filter(numero => numero > 10)
    console.log(maiordex)
}

function basicoFILTER02 () {
    const nomes = [ "Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz", "Lucas", "Júlia", "Gabriel", "Maria"]
    const comecaJ = nomes.filter(nome => nome.startsWith ("J"))
    console.log (comecaJ)
}
// ***********************************************************************************************************************************
// Nível Intermediários
function IntermediarioFILTER01 () {
const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
const produtosbaratos = produtos.filter(produto => produto.preco <= 50)
alert(JSON.stringify(produtosbaratos))
}

function intermediario02 () {
    const pessoas = [
        { nome: "Carlos", idade: 17 },
        { nome: "Mariana", idade: 22 },
        { nome: "João", idade: 15 },
        { nome: "Fernanda", idade: 30 }
      ];
      const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18 )
      console.log(maioresDeIdade); 

}
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// *                                                                                                                                *
// *    ███████ ██  ███    ██ ██████                                                                                                *
// *    ██      ██  ████   ██ ██   ██                                                                                               *
// *    █████   ██  ██ ██  ██ ██   ██                                                                                               *
// *    ██      ██  ██  ██ ██ ██   ██                                                                                               *
// *    ██      ██  ██   ████ ██████                                                                                                *
// *                                                                                                                                *
// ***********************************************************************************************************************************

function basico01 () {
    const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
    const amanda = nomes.find(nome => nome == "Amanda");
    console.log(amanda); // Deve retornar "Amanda"
}
function basico02 () {
    const listaDeUsuarios = [
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bruno" },
        { id: 3, nome: "Carla" }
      ];
      
      const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
      console.log(usuarioEncontrado); 
      // Deve retornar { id: 2, nome: "Bruno" }
}

// MAP
Function 
const palavras = ["olá", "mundo", "javascript"];
const enfatizadas = palavras.map(palavra => palavra + "!!!");
console.log(enfatizadas); // ["olá!!!", "mundo!!!", "javascript!!!"]
