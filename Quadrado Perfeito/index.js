function QuadradoPerfeito() {
    var numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Digite apenas números!";
        return;
    }

    var raiz = Math.sqrt(numero);
    var quadradoPerfeito = raiz === Math.floor(raiz);

    if (quadradoPerfeito) {
        document.getElementById("resultado").textContent = "O número " + numero + " é um quadrado perfeito.";
    } else {
        document.getElementById("resultado").textContent = "O número " + numero + " não é um quadrado perfeito.";
    }
}