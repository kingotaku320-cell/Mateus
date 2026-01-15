function mostrarNome() {
    // Pega o elemento input pelo ID
    const inputElement = document.getElementById('nomeUsuario');
    // Pega o valor (texto) que está dentro do input
    const nome = inputElement.value;
    // Pega o elemento p onde a mensagem será exibida
    const mensagemElement = document.getElementById('mensagemRecomendacao');

    if (nome.trim() !== '') {
        // Atualiza o texto do parágrafo na página
        mensagemElement.textContent = 'Bem-vindo, ' + nome + '! Os jogos que eu recomendo são: Valorant, CS go, The Binding of Isaac, Fifa 26, Hollow Knight, Need for Speed, Hollow Knight: Silksong e EFotball.';
    } else {
        mensagemElement.textContent = 'Por favor, digite seu nome.';
    }
}

// Nova função para lidar com o evento de tecla
function handleKeyPress(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13 ou 'Enter')
    if (event.key === 'Enter' || event.keyCode === 13) {
        mostrarNome(); // Chama a função principal quando Enter for pressionado
    }
}
