function Senha() {
    var senha = document.getElementById("senha").value;


    if (senha.length < 8) {
        document.getElementById("resultado").textContent = "A senha tem que ter pelo menos 8 caracteres.";
        return;
    }


    var Maiuscula = false;
    var Minuscula = false;
    var Numero = false;

    for (var i = 0; i < senha.length; i++) {
        var char = senha.charAt(i);

        if (char >= 'A' && char <= 'Z') {
            Maiuscula = true;
        } else if (char >= 'a' && char <= 'z') {
            Minuscula = true;
        } else if (char >= '0' && char <= '9') {
            Numero = true;
        }
    }

    if (Maiuscula && Minuscula && Numero) {
        document.getElementById("resultado").textContent = "A senha é válida.";
    } else {
        document.getElementById("resultado").textContent = "A senha não é válida.";
    }
}