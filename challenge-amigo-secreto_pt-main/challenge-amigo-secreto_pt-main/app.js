function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');

    if (!inputAmigo.value.trim()) {
        alert('Por favor, digite um nome válido.');
        return;
    }

    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = inputAmigo.value.trim();
    listaAmigos.appendChild(novoAmigo);

    inputAmigo.value = '';
}

function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');

    if (!listaAmigos.children.length) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.children.length);
    let amigoSorteado = listaAmigos.children[indiceSorteado].textContent;

    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}