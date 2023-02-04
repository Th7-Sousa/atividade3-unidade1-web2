// primeira opção

exports.soma = function (num1, num2) {
  return num1 + num2
}

exports.multiplica = function (num1, num2) {
  return num1 * num2
}

// // segunda opção

module.exports = {
  soma(num1, num2) {
    return num1 + num2;
  },
  multiplica(num1, num2) {
    return num1 * num2;
  },
};

// terceira opção

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return num1 * num2;
}

function subtrai(num1, num2) {
  return num1 - num2;
}
   

module.exports = soma;
module.exports = { multiplica, subtrai }
