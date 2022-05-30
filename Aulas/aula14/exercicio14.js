let frutas = [
  { fruta: 'Maça', preco: 6.36 },
  { fruta: 'Uva', preco: 4.99 },
  { fruta: 'Melão', preco: 9.99 },
];

function listaFrutas(f) {
  for (let produto of f) {
    for (let p in produto) {
      console.log(` ${p} - ${produto[p]}`);
    }
  }
}

listaFrutas(frutas);
