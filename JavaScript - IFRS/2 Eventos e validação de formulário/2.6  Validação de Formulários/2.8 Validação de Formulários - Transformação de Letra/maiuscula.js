function maiuscula() {
    var letra = document.getElementById("texto").value;
    letra = letra.toUpperCase(); //toUpperCase deixa todas as letras em maiúsculo
    document.getElementById("texto").value = letra;
}