function Primo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function VerificarPrimo() {
    var numero = parseInt(document.getElementById("numero").value);
    var verificaprimo = document.getElementById("verificaprimo");

    if (Primo(numero)) {
        verificaprimo.textContent = "O número " + numero + " é primo.";
    } else {
        verificaprimo.textContent = "O número " + numero + " não é primo.";
    }
}

function ListaPrimos() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 1; i <= 1000; i++) {
        if (Primo(i)) {
            lista.innerHTML += i + "<br>";
        }
    }
}