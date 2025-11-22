const nome = "Edio Costa";
let nome2 = "";
let pessoaDefault = {
  nome: "Edio Costa",
  idade: "41",
  trabalho: "Desenvolvedor",
};

let nomes = ["Edio", "Mari", "Pedro"];
let pessoas = [
  {
    nome: "Edio Costa",
    idade: "41",
    trabalho: "Desenvolvedor",
  },
  {
    nome: "MArilise",
    idade: "35",
    trabalho: "Chefe Desenvolvedor",
  },
];

function alterarNome() {
  nome2 = "Maria Silva";
  console.log("Valor alterado");
  console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("nome");
  console.log(pessoa.nome);
  console.log(pessoa.idade);
  console.log(pessoa.trabalho);
}

// imprimirPessoa({
//   nome: "Marilise",
//   idade: "35",
//   trabalho: "Chefe Desenvolvedora",
// });

// recebeEAlteraNome("Joao Costa Pereira");
// recebeEAlteraNome("Francisca Silva");

// alterarNome();
console.log(pessoas);

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

adicionarPessoa({
  nome: "Jesus",
  idade: "33",
  trabalho: "Santo",
});

console.log(pessoas);
