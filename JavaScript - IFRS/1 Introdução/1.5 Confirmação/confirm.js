var sair = confirm("Confirma ir para a página do Google?"); // tela de confirmação
if(sair == 1) { // verdadeiro é representado com 1 e falso com 0. Comparação é com == e Atribuição é com =
    window.location = "http://www.google.com.br"; //mudar a localização da página para o link informado
} // não precisa necessariamente do else. Nesse caso, se não mudar a página, não é pra acontecer nada, por isso, não tem else