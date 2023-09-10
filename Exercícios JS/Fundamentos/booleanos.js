let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1;
console.log(Boolean(isAtivo));
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto')
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log('os falsos...');
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!'');
console.log(!!undefined);

let nome = ''
console.log(nome || 'Desconhecido.')
