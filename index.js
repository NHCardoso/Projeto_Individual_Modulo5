//console.log('teste de programa')

import readLineSync from 'readline-sync'
import ck from 'chalk'
// const ck = require('chalk')

const valores = []
let input = ""

//laço while

console.log(ck.bgHex('#008080').hex('#7FFFD4')(' ::::::::::::::::::: Programa Organizador de Propriedades CSS ::::::::::::::::::  '))

console.log(ck.hex('#2F4F4F').hex('#00FFFF')(' --- Este programa era uma lista em ordem alfabética das propridades CSS --- '))

while(input != "sair")
{
    valores.push(input)
    input = readLineSync.question(ck.bold.hex('#8BF4E1')("Digite as Propriedades de CSS"))
    .toLocaleLowerCase()

}
//mostra o conteúdo do vetor

//console.log(valores.sort().join('\n'))

console.table(`${'\n'} ${ck.hex('#DAA520')('---------------------------------------------------------------------------------------------------------------')} ${ck.hex('#00CED1')(valores.sort().join('\n• '))} ${'\n'} ${ck.hex('#DAA520')('---------------------------------------------------------------------------------------------------------------')}`); 
