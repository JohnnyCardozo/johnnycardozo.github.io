const formularioCadastroJogo = document.getElementById("novoJogo");
console.log(formularioCadastroJogo);

formularioCadastroJogo.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const tituloCadastroJogo = evento.target.elements['cadastroNomeJogo'].value;
    const desenvolvedoraCadastroJogo = evento.target.elements['cadastroDesenvolvedora'].value;
    const publicadoraCadastroJogo = evento.target.elements['cadastroPublicadora'].value;
    const dataLancamentoCadastroJogo = evento.target.elements['cadastroDataLancamento'].value;
    const numeroJogadoresCadastro = evento.target.elements['cadastroNumeroJogadores'].value;

    cadastrarJogo(tituloCadastroJogo, desenvolvedoraCadastroJogo, publicadoraCadastroJogo, dataLancamentoCadastroJogo, numeroJogadoresCadastro);
});

function cadastrarJogo(nome, desenvolvedora, publicadora, dataLancamento, numeroJogadores) {
    const listaJogos = document.getElementById("listaJogos");

    const itemJogo = document.createElement('li');
    itemJogo.classList.add("item__jogo");

    const novoInformacaoJogo = document.createElement('div');
    novoInformacaoJogo.classList.add("informação__jogo");
    itemJogo.appendChild(novoInformacaoJogo);

    const nomeJogo = document.createElement('p');
    nomeJogo.classList.add("nome__jogo");
    nomeJogo.innerHTML = 'Nome:  ' + nome
    novoInformacaoJogo.appendChild(nomeJogo);

    const desenvolvedoraJogo = document.createElement('p');
    desenvolvedoraJogo.classList.add("desenvolvedora__jogo");
    desenvolvedoraJogo.innerHTML = 'Desenvolvedora:  ' + desenvolvedora;
    novoInformacaoJogo.appendChild(desenvolvedoraJogo);

    const publicadoraJogo = document.createElement('p');
    publicadoraJogo.classList.add("publicadora__jogo");
    publicadoraJogo.innerHTML = 'Publicadora:  ' + publicadora;
    novoInformacaoJogo.appendChild(publicadoraJogo);

    const dataJogo = document.createElement('p');
    dataJogo.classList.add("data__jogo");
    dataJogo.innerHTML = 'Data de Lançamento:  ' + dataLancamento;
    novoInformacaoJogo.appendChild(dataJogo);

    const numeroJogadoresJogo = document.createElement('p');
    numeroJogadoresJogo.classList.add("numero__jogadores__jogo");
    numeroJogadoresJogo.innerHTML = 'Número de Jogadores:  ' + numeroJogadores;
    novoInformacaoJogo.appendChild(numeroJogadoresJogo);

    listaJogos.appendChild(itemJogo)
};
