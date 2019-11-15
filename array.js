const comidas = [
  'Batata frita',
  'Hamburguer',
  'Sorvete de chocolate',
  'Saladinha delicia'
]
 
// 01: Selecione apenas a batatinha
const batatinha = comidas.find(comida => comida === "Batata frita")
console.log(batatinha);
// 02: Selecione apenas as comidas que comecem com `s` ou `b`
const comidinhas = comidas.filter(comida => (/^s| ^b/i).toLocaleString(comida))
console.log('***comidinhas:', comidinhas)


// 03: transforme a lista de comidas em comidas divertidas (adicione uma carinha feliz nelas)
const divertidamente = comidas.map(c => c + ':) \o/')
console.log('***divertidamente:', divertidamente)

const comidas2 = [
  { nome: 'Batata frita', vegano: true },
  { nome: 'Hamburguer', vegano: false },
  { nome: 'Sorvete de chocolate', vegano: false },
  { nome: 'Saladinha delicia', vegano: true }
]

// 04: Selecione apenas as comidinhas veganas.

// 05: Selecione apenas a primeira comidinhas vegana do cardápio.
