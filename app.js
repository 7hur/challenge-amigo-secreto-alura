let listaAmigos = [];

function adicionarAmigo() {
    if (validarInput()) {
        listaAmigos.push(document.getElementById('amigo').value);
        limparCampo();
        console.log(listaAmigos);
    }
}

function validarInput() {
    let input = document.getElementById('amigo').value.trim();
    if (input === '') {
        alert('Por favor, preencha o campo com um nome válido.');
        limparCampo()
        return false;
    }
    return true;
}

function limparCampo() {
    let limpeza = document.getElementById('amigo');
    limpeza.value = '';
}