function pegaID(contador) {
    let idElemento = informacoesArtigo[contador];
    console.log(idElemento.id);
}

const informacoesArtigo = document.querySelectorAll(".campo__input");


let contador = 0;

while(contador < informacoesArtigo.length){
    const campos = informacoesArtigo[contador];

    let contadorFuncao = contador

    campos.onclick = function () {
        pegaID(contadorFuncao);
    }

    contador += 1;
}