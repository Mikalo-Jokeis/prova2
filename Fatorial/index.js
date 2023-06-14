
function Fatorial(numero) {
    var fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

function Fatoriais1a10() {
    var fatoriais = {};

    for (let i = 1; i <= 10; i++) {
        fatoriais[i] = Fatorial(i);
    }

    return fatoriais;
}

function exibirFatoriais() {
    var fatoriais = Fatoriais1a10();
    var lista = document.getElementById("lista");
    lista.innerHTML = "<h2>Fatoriais de 1 a 10:</h2>";

    for (let i = 1; i <= 10; i++) {
        lista.innerHTML += `<p>${i}! = ${fatoriais[i]}</p>`;
    }
}

function FatorialUsuario() {
    var fatorial = document.getElementById("numero");
    var numero = parseInt(fatorial.value);

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>O fatorial de ${numero} é ${Fatorial(numero)}</h2>`;
}