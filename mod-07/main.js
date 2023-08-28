const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</> - conta: <b>{numeroContaBeneficiario.value}</b>';

    formEValido = validaNome(nomeBeneficiario.value) 
    if (formEValido) {

        const containerMensagemSucesso = document.querySelector('.success-mesage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
  
        nomeBeneficiario.value = ' ';
        numeroContaBeneficiario.value = ' ';    
        valorDeposito.value = ' '; 
    } else {
       document.querySelector('.error-mesage').style.display = 'block';
    }
})