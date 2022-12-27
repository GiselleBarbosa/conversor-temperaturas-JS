// função para capturar tipo de medida 1
select1 = document.getElementById('converterDe');

select1.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    tipoMedida1 = option.textContent;
    console.log("capturado tipo medida => ", tipoMedida1);
    return tipoMedida1;
  });

// função para pegar o tipo de medida 2
select2 = document.getElementById('converterPara');
select2.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    tipoMedida2 = option.textContent;
    return tipoMedida2;
  });

// Função para pegar o valor do input 1 
valorInput1 = document.getElementById('input1');


// função para realizar o calculo
function converteValores() {
  var tipoMedida1 = this.tipoMedida1;
  var valorInput1 = this.valorInput1.value;
  console.log("input => ", valorInput1);
  console.log("medida => ", tipoMedida1);

  if (tipoMedida1 === 'Celsius') {
    resultado = (valorInput1 * 9 / 5) + 32;
    console.log('if', resultado);
    return mostraResultado();
  }

  else console.log('error :P');
}

function mostraResultado() {
  var resultado = this.resultado;
  console.log(resultado);
  return document.getElementById('valorConvertido1').innerHTML = resultado;
}



