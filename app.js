const textoArea = document.querySelector(".texto__area");
const mensagem = document.querySelector(".texto__mensagem__codificada");

function botaoEncriptar(){
    const textoEncriptado = encriptar(textoArea.value);
    mensagem.value = textoEncriptado;
    textoArea.value = "";
}

function encriptar(stringEncriptada) {
    console.log(stringEncriptada);
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function botaoDesencriptar(){
    const textoDesencriptado = desencriptar(textoArea.value);
    mensagem.value = textoDesencriptado;
    textoArea.value = "";
}

function desencriptar(stringDesencriptada) {
    // console.log(stringEncriptada);
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");
}

function limparTexto() {
    mensagem.value = ""
}