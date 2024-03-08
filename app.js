let inputTexto;

//exibirMensagemInicial();

function exibirTextoNaTela(classe, texto) {
    document.getElementsByClassName(classe)[0].innerHTML = texto;
}

function botaoCriptografar(){
    inputTexto = document.getElementsByClassName('campoDeTexto')[0].value;
    console.log(inputTexto);
    var textoCriptografado = criptografar(inputTexto);
    document.getElementsByClassName('main__outputtexto_default')[0].style.display = "none";
    document.getElementsByClassName('main__outputtexto_comTexto')[0].style.display = "block";
    exibirTextoNaTela('main__outputtexto_comTexto', textoCriptografado)
}

function botaoDescriptografar(){
    inputTexto = document.getElementsByClassName('campoDeTexto')[0].value;
    console.log(inputTexto);
    var textoDescriptografado = descriptografar(inputTexto);
    document.getElementsByClassName('main__outputtexto_default')[0].style.display = "none";
    document.getElementsByClassName('main__outputtexto_comTexto')[0].style.display = "block";
    exibirTextoNaTela('main__outputtexto_comTexto', textoDescriptografado)
}

function criptografar(texto){
    var textoCriptografado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g,'ai').replace(/o/g, 'ober').replace(/u/g,'ufat');
    return textoCriptografado;
}

function descriptografar(texto){
    var textoDescriptografado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g,'a').replace(/ober/g, 'o').replace(/ufat/g,'u');
    return textoDescriptografado;
}