//while

// let loop = 0;
// let cores = ['Verde', 'Vermelho', 'Azul'];
// while (loop < 10) {
//   console.log(cores[loop]);
//   loop++;
// }

let teste = 0;
do {
  teste = Number(prompt('Digite 0 para sair'));

  switch (teste) {
    case 0:
      alert('Saindo do Sistema');
      break;
    case 1:
      alert('cAdastrando');
      break;
    case 2:
      alert('Consultando');
      break;
    default:
      alert('Opcao invalida');
      break;
  }
} while (teste != 0);
