// primeira opção

import { soma, multiplica, subtrai } from './operacoesESM.js';

console.log(soma(4,2))
console.log(multiplica(4,2))
console.log(subtrai(4,2))

// segunda opção

import * as operacoes from './operacoesESM.js';

console.log(operacoes.soma(4,2))
console.log(operacoes.multiplica(4,2))
console.log(operacoes.subtrai(4,2))

// terceira opção

import soma from './operacoesESM.js';

console.log(soma(4,2))