/*
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const studantes = [
  { 
    name: 'Henrique',
    provaOne: 10,
    provaTwo: 8,
  },
  { 
    name: 'João',
    provaOne: 7,
    provaTwo: 5,
  },
  { 
    name: 'Mariana',
    provaOne: 6,
    provaTwo: 5,
  },
  { 
    name: 'Carol',
    provaOne: 10,
    provaTwo: 10,
  }
]

let mediaCalc

function mediaProva(studantes) {
  let media = ((studantes.provaOne + studantes.provaTwo) / 2)
  mediaCalc = media >= 7 ? `Parabéns, ${studantes.name}! Você foi aprovado no concurso` : `Não foi dessa vez ${studantes.name}! Tente novamente.`
  console.log(studantes.name)
  return media
}

function printMedia(std){
  console.log(std.name)
  return `
  A média do(a) aluno(a) ${std.name} é: ${mediaProva(std)}\n
  ${mediaCalc}`
}

for ( let studant of studantes) {
  let mediaMensage = printMedia(studant)
  alert (mediaMensage)
}