// //faça uma função que retorne uma string contém a letra h nela//
// function retornaString(palavra) {
//     const regex = /h/
//     return regex.test(palavra)
// }
// const resultado = retornaString("baby shark")
// console.log(resultado)
// //altere sua função para que ela aceite maiuscula e minuscula (case insensitive)//
// function retornaString2(palavra){
// const regex= /h/i
// return regex.test(palavra)
// }
// const resultadoMaisc = retornaString2("Baby SHARK")
// console.log(resultadoMaisc)
// //altere sua função para ela retorne se a string//
// function retornaString(letra){
//     const comeco =  /a$|^b/i
//     return comeco.test(letra)
// }
// const novoResult = retornaString("aranha")
// console.log(novoResult)
//altere sua função pra verificar a string contem número//
function contemNumbers(numero){
    const verificaNum = /\d+/
    return verificaNum.test(numero)
}
const achaNum = contemNumbers("123ovo")
console.log(achaNum)