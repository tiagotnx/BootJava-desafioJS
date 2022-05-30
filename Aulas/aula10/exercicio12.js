/*1. Crie uma função que: 
a) Conte quantos carácteres uma palavra possui
b) Converta esta mesma palavra para MAIÚSCULA 
c) Imprima somente a 3º letra desta palavra
d) Troque esta mesma letra da palavra pela letra “X”

Exemplo da saída da função: 
Esta palavra tem 7 carácteres
A palavra marcelo ficou MARCELO
A letra  é o 3º carácter da palavra MARCELO
MARCELO ficou MAXCELO */

let str = 'Vinícius';
console.log(str.length);
console.log(str.toUpperCase(str));
console.log(`${str[2]}`);
console.log(str.replace(str[2], 'X'));
