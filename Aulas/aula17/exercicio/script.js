window.onload = function () {
  const valor1 = document.querySelector('#v1');
  const valor2 = document.querySelector('#v2');
  const total = document.querySelector('#v3');

  valor2.addEventListener('blur',function(){
    total.value = Number(valor1.value)+Number(valor2.value)
  }
}
