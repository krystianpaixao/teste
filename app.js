let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

function botaoClick(){
    console.log('o botão click foi clickado!');
}
function botaoAlertudo(){
    console.log('Eu amo a Vanessinha, bora de Lanchinho hoje?');
}

function botaoPromptideo() {
   let cidadeNome
   cidadeNome = prompt('Me fale uma cidade')
 alert (`Fui a ${cidadeNome} e não tem nada a ver com você :D`)
}

function somaDoNum() {
    let primeiroNumero = parseInt(prompt('Pai tá calculadora, mas só com soma. Manda um número'))
    let segundoNumero = parseInt(prompt('Lança outro'))
    let resultadoGeral = primeiroNumero + segundoNumero
        alert(`${primeiroNumero} + ${segundoNumero} = ${resultadoGeral}, otaro`)
}