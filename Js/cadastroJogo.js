const formularioCadastroJogo = document.getElementById("novoJogo");
const jogos = JSON.parse(localStorage.getItem("Jogos")) || []; 

jogos.forEach((elemento) => {
    cadastrarJogo(elemento)
})

formularioCadastroJogo.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const tituloCadastroJogo = evento.target.elements['cadastroNomeJogo'];
    const desenvolvedoraCadastroJogo = evento.target.elements['cadastroDesenvolvedora'];
    const publicadoraCadastroJogo = evento.target.elements['cadastroPublicadora'];
    const dataLancamentoCadastroJogo = evento.target.elements['cadastroDataLancamento'];
    const numeroJogadoresCadastro = evento.target.elements['cadastroNumeroJogadores'];

    const jogoAtual = {
        "nome": tituloCadastroJogo.value,
        "desenvolvedora": desenvolvedoraCadastroJogo.value,
        "publicadora": publicadoraCadastroJogo.value,
        "dataLançamento": dataLancamentoCadastroJogo.value,
        "numeroJogadores": numeroJogadoresCadastro.value
    }

    cadastrarJogo(jogoAtual);

    jogos.push(jogoAtual);

    localStorage.setItem("Jogos", JSON.stringify(jogos));

    tituloCadastroJogo.value = "";
    desenvolvedoraCadastroJogo.value = "";
    publicadoraCadastroJogo.value = "";
    dataLancamentoCadastroJogo.value = "";
    numeroJogadoresCadastro.value = "";
});

function cadastrarJogo(jogo) {
    const listaJogos = document.getElementById("listaJogos");

    const itemJogo = document.createElement('li');
    itemJogo.classList.add("item__jogo");

    const novoInformacaoJogo = document.createElement('div');
    novoInformacaoJogo.classList.add("informação__jogo");
    itemJogo.appendChild(novoInformacaoJogo);

    const nomeJogo = document.createElement('p');
    nomeJogo.classList.add("nome__jogo");
    nomeJogo.innerHTML = 'Nome:  ' + jogo.nome
    novoInformacaoJogo.appendChild(nomeJogo);

    const desenvolvedoraJogo = document.createElement('p');
    desenvolvedoraJogo.classList.add("desenvolvedora__jogo");
    desenvolvedoraJogo.innerHTML = 'Desenvolvedora:  ' + jogo.desenvolvedora;
    novoInformacaoJogo.appendChild(desenvolvedoraJogo);

    const publicadoraJogo = document.createElement('p');
    publicadoraJogo.classList.add("publicadora__jogo");
    publicadoraJogo.innerHTML = 'Publicadora:  ' + jogo.publicadora;
    novoInformacaoJogo.appendChild(publicadoraJogo);

    const dataJogo = document.createElement('p');
    dataJogo.classList.add("data__jogo");
    dataJogo.innerHTML = 'Data de Lançamento:  ' + jogo.dataLançamento;
    novoInformacaoJogo.appendChild(dataJogo);

    const numeroJogadoresJogo = document.createElement('p');
    numeroJogadoresJogo.classList.add("numero__jogadores__jogo");
    numeroJogadoresJogo.innerHTML = 'Número de Jogadores:  ' + jogo.numeroJogadores;
    novoInformacaoJogo.appendChild(numeroJogadoresJogo);

    listaJogos.appendChild(itemJogo)
};
