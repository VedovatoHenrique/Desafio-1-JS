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

function printMedia(std) {
  const media = (std.provaOne + std.provaTwo) / 2

  const mediaCalc = media >= 7
      ? `Parabéns, ${std.name}! Você foi aprovado no concurso`
      : `Não foi dessa vez ${std.name}! Tente novamente.`

  console.log(std.name)
  alert(`
  A média do(a) aluno(a) ${std.name} é: ${media}\n
  ${mediaCalc}`)
}


studantes.map((xbacon, idx) => {
  console.log(idx)
  return printMedia(xbacon)
})