const formularioArtigo = document.getElementById("novoArtigo");
console.log(formularioArtigo);

formularioArtigo.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const tituloArtigo = evento.target.elements['tituloPublicacao'].value;
    const emailArtigo = evento.target.elements['emailPublicacao'].value;

    criarArtigo(tituloArtigo, emailArtigo);
});

function criarArtigo(nome, email) {
    console.log(nome);
    console.log(email);

    document.createElement('li')
};