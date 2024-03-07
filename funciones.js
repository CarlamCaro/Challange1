function validarInput(input) {
  var inputValue = input.value;
  var letrasMinusculas = /^[a-z\s]+$/;

  if (!letrasMinusculas.test(inputValue)) {
    // Si la entrada no contiene solo letras minúsculas y espacios, eliminar caracteres no permitidos
    input.value = inputValue.replace(/[^a-z\s]/g, "");
  }
}

function encriptar(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function Encriptar() {
  var texto = document.getElementById("inputMensaje").value;
  var resultadoEncriptado = encriptar(texto);
  document.getElementById("resultado").value = resultadoEncriptado;
}

function Desencriptar() {
  var texto = document.getElementById("inputMensaje").value;
  var resultadoDesencriptado = desencriptar(texto);
  document.getElementById("resultado").value = resultadoDesencriptado;
}

function copiarTexto() {
  var resultadoTextArea = document.getElementById("resultado");
  resultadoTextArea.select();
  // Para dispositivos móviles
  resultadoTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado con exito!");
  window.getSelection().removeAllRanges();
}
