// primeira opção

export function soma(num1, num2) {
  return num1 + num2;
}

export function multiplica(num1, num2) {
  return num1 * num2;
}

export function subtrai(num1, num2) {
  return num1 - num2;
}

// segunda opção

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return num1 * num2;
}

function subtrai(num1, num2) {
  return num1 - num2;
}

export { soma, multiplica, subtrai };

// terceira opcao

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return num1 * num2;
}

export default soma