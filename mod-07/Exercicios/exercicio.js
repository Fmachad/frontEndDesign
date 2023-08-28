function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
  
    var mensagemElement = document.getElementById("mensagem");
  
    if (isNaN(campoA) || isNaN(campoB)) {
      mensagemElement.innerHTML = "Por favor, insira números válidos em ambos os campos.";
    } else if (campoB > campoA) {
      mensagemElement.innerHTML = "Formulário válido: número B é maior que número A!";
    } else {
      mensagemElement.innerHTML = "Formulário inválido: número B deve ser maior que número A.";
    }
  }