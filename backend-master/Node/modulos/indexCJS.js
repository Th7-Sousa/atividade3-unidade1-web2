// primeira opção

const operacoes = require('./operacoesCJS.js');

const soma = operacoes.soma(4,2)
console.log(soma)

const multiplica = operacoes.multiplica(4,2)
console.log(multiplica)

// segunda opção

const {soma, multiplica} = require('./operacoesCJS.js');

console.log(soma(4,2))
console.log(multiplica(4,2))