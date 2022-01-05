function calculaIMC() {
    document.getElementById("peso").style.borderColor = "#ffffff";
    document.getElementById("peso").style.backgroundColor = "#ffffff";
    document.getElementById("altura").style.borderColor = "ffffff";
    document.getElementById("altura").style.backgroundColor = "#ffffff";
    if(document.getElementById("peso").value == ""){
        alert("Preencha o peso");
        document.getElementById("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "#ffe5e5";
        document.getElementById("peso").focus();
        return false;
    }
    if(document.getElementById("altura").value == ""){
        alert("Preencha a altura");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "#ffe5e5";
        document.getElementById("altura").focus();
        return false;
}

var peso = parseFloat(document.getElementById("peso").value); //passando para números (flutuante) utilizando "parseFloat"
var altura = parseFloat(document.getElementById("altura").value);
var resultado = peso/(altura*altura);
alert("Seu IMC é: "+resultado);
return true;
}