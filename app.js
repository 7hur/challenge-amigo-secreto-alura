let listaAmigos = [];

function adicionarAmigo() {
    if (validarInput()) {
        listaAmigos.push(document.getElementById('amigo').value.trim());
        limparCampo('amigo');
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

function sortearAmigo() {
    let quantidadeAmigos = listaAmigos.length;
    if (quantidadeAmigos === 0) {
        alert('Não há nomes adicionados para o sorteio!\nTente novamente.');
    } else {
        let amigoSorteado = Math.floor(Math.random() * quantidadeAmigos);
        let escolha = document.getElementById('resultado');
        escolha.innerHTML = listaAmigos[amigoSorteado];
    }
}


function validarInput() {
    let input = document.getElementById('amigo').value.trim();
    if (input === '') {
        alert('Por favor, preencha o campo com um nome válido.');
        limparCampo('amigo');
        return false;
    }
    return true;
}

function limparCampo(tag) {
    let limpeza = document.getElementById(tag);
    limpeza.value = '';
}