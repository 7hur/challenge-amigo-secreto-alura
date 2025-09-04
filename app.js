let listaAmigos = [];

function adicionarAmigo() {
    if (validarInput()) {
        listaAmigos.push(document.getElementById('amigo').value.trim());
        limparCampo();
        listarAmigosAdicionados();
        console.log(listaAmigos); //Para testes de validações.
    }
}

function listarAmigosAdicionados() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = `<li>${listaAmigos[i]}</li>`;
        lista.innerHTML += item;
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