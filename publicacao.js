const elementoComInput = document.querySelectorAll(".campo__input");

for (let contador = 0; contador < elementoComInput.length; contador++) {
    const campos = elementoComInput[contador];

    campos.onclick = function () {
        pegaID(contador);
    }

    campos.onkeydown = function (evento) {

        if (evento.code === 'Space') {
            campos.classList.add('apresentacao__destaque');
        }
    }

    campos.onkeyup = function (evento) {
        if (evento.code === 'Space') {
            campos.classList.remove('apresentacao__destaque');
        } 
    }
}

function pegaID(indexElementoDoConjunto) {
    const elemento = elementoComInput[indexElementoDoConjunto];
    console.log(elemento.id);
}
