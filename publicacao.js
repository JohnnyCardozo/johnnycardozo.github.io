const elementoComInput = document.querySelectorAll(".campo__input");

function pegaID(indexElementoDoConjunto) {
    let elemento = elementoComInput[indexElementoDoConjunto];
    console.log(elemento.id);
}

for (let contador = 0; contador < elementoComInput.length; contador++) {
    const campos = elementoComInput[contador];

    campos.onclick = function () {
        pegaID(contador);
    }
}