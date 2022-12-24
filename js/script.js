//recebe todo o select1
select1 = document.getElementById('converterDe');

// observa as mudanças dos selects e armazena o texto em uma variavel global
select1.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    texto1 = option.textContent;
    return texto1;
  });
//recebe todo o select 2
select2 = document.getElementById('converterPara');

// observa as mudanças dos selects e armazena o texto em uma variavel global
select2.addEventListener('change',
  function () {
    option = this.selectedOptions[0];
    texto2 = option.textContent;
    return texto2;
  });

// recebe as 2 variaveis e as armazena em 2 novas variaveis
function selectTemps(texto1, text2) {
  var temperatura1 = this.texto1;
  var temperatura2 = this.texto2;
  return console.log("temp 1 => ", temperatura1, "temp 2 => ", temperatura2);
}


