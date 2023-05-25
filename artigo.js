const formularioArtigo = document.getElementById("novoArtigo");
console.log(formularioArtigo);

formularioArtigo.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const tituloArtigo = evento.target.elements['publicacaoTitulo'].value;
    const emailArtigo = evento.target.elements['publicacaoEmail'].value;

    criarArtigo(tituloArtigo, emailArtigo);
});

function criarArtigo(nome, email) {
    console.log(nome);
    console.log(email);

    document.createElement('li')
};