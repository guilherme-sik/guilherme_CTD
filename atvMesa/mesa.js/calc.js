let calcSoma = require('./mesa.js/somar')
let calcDivisao = require('./mesa.js/divisao')
let calcMultiplicar = require('./mesa.js/multiplicar')
let calcSubtrair = require('./mesa.js/subtrair')

let somar = (a, b) => {
    let resultadoSoma;
    resultadoSoma = calcSoma.soma(a, b);
    console.log(resultadoSoma);
};
somar(2,2);

let subtrair = (a, b) => {
    let resultadoSubtrair;
    resultadoSubtrair = calcSubtrair.subtrair(a, b);
    console.log(resultadoSubtrair);
};
subtrair(2, 2);

let divisao = (a, b) => {
    let resultadoDivisao;
    resultadoDivisao = calcDivisao.divisao(a, b);
    console.log(resultadoDivisao);
}; 
divisao(2, 2);

let multiplicar = (a, b) => {
    let resultadoMultiplicar;
    resultadoMultiplicar = calcMultiplicar.multiplicar(a, b);
    console.log(resultadoMultiplicar);
}; 
multiplicar(2, 5);



// INTEGRANTES: CARLINDO , NELSON KOBAY , GUILHERME SANTOS, PEDRO CHAVES 


