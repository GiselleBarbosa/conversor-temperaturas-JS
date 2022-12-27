// função para receber o tipo de medida 1
select1 = document.getElementById('converterDe');

select1.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    tipoMedida1 = option.textContent;
    console.log("capturado tipo medida => ", tipoMedida1);
    return tipoMedida1;
  });



// função para receber o tipo de medida 2
select2 = document.getElementById('converterPara');
select2.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    tipoMedida2 = option.textContent;
    return tipoMedida2;
  });



// recebendo o valor do input 1 
valorInput1 = document.getElementById('input1');
// recebendo o valor do input 2
valorInput2 = document.getElementById('input2');


// função para realizar o calculo
function converteValores1() {
  var tipoMedida1 = this.tipoMedida1;
  var valorInput1 = this.valorInput1.value;
  console.log("input => ", valorInput1);
  console.log("medida => ", tipoMedida1);

  // validação caso medidas iguais
  if (tipoMedida1 === 'Celsius' && tipoMedida2 === 'Celsius') {
    alert('[ATENÇÃO] Selecione medidas diferentes para conversão');
    return mostraResultado();
  }

  if (tipoMedida1 === 'Fahrenheit' && tipoMedida2 === 'Fahrenheit') {
    alert('[ATENÇÃO] Selecione medidas diferentes para conversão');
    return mostraResultado();
  }

  if (tipoMedida1 === 'Kelvin' && tipoMedida2 === 'Kelvin') {
    alert('[ATENÇÃO] Selecione medidas diferentes para conversão');
    return mostraResultado();
  }

  // validação de campos vazios
  if (tipoMedida1 && valorInput1 === '') {
    console.log('error');
  }

  // todas as formulas 
  if (tipoMedida1 === 'Celsius' && tipoMedida2 === 'Fahrenheit') {
    resultado = (valorInput1 * 9 / 5) + 32;
    return mostraResultado();
  }

  if (tipoMedida1 === 'Celsius' && tipoMedida2 === 'Kelvin') {
    resultado = +valorInput1 + 273.15;
    return mostraResultado();
  }


  if (tipoMedida1 === 'Kelvin' && tipoMedida2 === 'Celsius') {
    resultado = valorInput1 - 273.15;
    return mostraResultado();
  }

  if (tipoMedida1 === 'Kelvin' && tipoMedida2 === 'Fahrenheit') {
    resultado = ((valorInput1 - 273.15) * 9 / 5 + 32).toFixed(2);
    return mostraResultado();
  }

  if (tipoMedida1 === 'Fahrenheit' && tipoMedida2 === 'Celsius') {
    resultado = (valorInput1 - 32) * 5 / 9;

    return mostraResultado();
  }

  if (tipoMedida1 === 'Fahrenheit' && tipoMedida2 === 'Kelvin') {
    resultado = ((valorInput1 - 32) * 5 / 9 + 273.15).toFixed(3);
    return mostraResultado();
  }

  else alert("[ERROR] Verifique se o campo valor esta preenchido");
}

function mostraResultado() {
  var resultado = this.resultado;
  console.log(resultado);
  return document.getElementById('valorConvertido1').innerHTML = resultado;
}



