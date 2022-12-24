select1 = document.getElementById('converterDe');
select1.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    texto1 = option.textContent;
    return texto1;
  });

  function selectTemp1(texto1) {
  var temperatura = this.texto1;
  return console.log("clicou => ", temperatura);
}


select2 = document.getElementById('converterPara');
select2.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    texto2 = option.textContent;
    return texto2;
  });
  

function selectTemp2(texto2) {
  var temperatura = this.texto2;
  return console.log("botão 2 => ", temperatura);
}