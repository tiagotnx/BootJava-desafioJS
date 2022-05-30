window.onload = function () {
  let produtos = [
    { descricao: 'Bolacha', preco: 2.2 },
    { descricao: 'Goiabada', preco: 9.9 },
    { descricao: 'Sabonete', preco: 3.25 },
  ];

  const listaProdutos = document.querySelector('#listaProdutos');
  const Total = document.querySelector('#total');
  (() => {
    let totalzinho = 0;
    for (let pro of produtos) {
      const filhoLi = document.createElement('li');
      for (listaP in pro) {
        if (listaP == 'preco') {
          listaProdutos
            .appendChild(filhoLi)
            .setAttribute('data-preco', pro[listaP]);
          totalzinho += pro[listaP];
        } else {
          listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
        }

        //console.log(pro[listaP]);
      }
    }
    Total.value = totalzinho.toFixed(2);
  })(produtos);
};
