const btnEncriptar = document.querySelector(".seccion_central_btn_encriptar");
const btnDesencriptar = document.querySelector(
  ".seccion_central_btn_desencriptar"
);

const btnCopiar= document.querySelector(".seccion_derecha_btn_copiar")

const txtAreaEncriptacion = document.querySelector(".seccion_central_txtarea");



const etiquetaTexto = document.querySelector(
  ".seccion_derecha_contenido_texto_encriptado"
);

const restricciones = (event) => {
  let caracter = event.key;

  if (event.key.length > 1) {
    return;
}
  if (
    (caracter >= "0" && caracter <= "9")
  ) {
    event.preventDefault(); 
    return;
  }

  if(caracter >= "A" && caracter <= "Z"){
    event.preventDefault();
    txtAreaEncriptacion.value+= caracter.toLowerCase()
    return;
  }

};

const encriptar = () => {
  let texto = txtAreaEncriptacion.value;
  let textoEncriptado = "";

  let arrTexto = texto.split("");
  let newArrTexto = [];
  for (let i = 0; i < arrTexto.length; i++) {
    switch (arrTexto[i]) {
      case "a":
        newArrTexto.push("ai");
        break;
      case "e":
        newArrTexto.push("enter");
        break;
      case "i":
        newArrTexto.push("imes");
        break;
      case "o":
        newArrTexto.push("ober");
        break;
      case "u":
        newArrTexto.push("ufat");
        break;
      default:
        newArrTexto.push(arrTexto[i]);
        break;
    }
  }

  etiquetaTexto.textContent = newArrTexto.join("");
};

const desencriptar = () => {
  let textoEncriptado = txtAreaEncriptacion.value;
  let textoDesencriptado = "";

  textoDesencriptado = textoEncriptado
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  etiquetaTexto.textContent = textoDesencriptado;
};

const copiarTexto = () => {
    navigator.clipboard.writeText(etiquetaTexto.textContent)
    alert("Texto copiado")
};

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto)
txtAreaEncriptacion.addEventListener("keydown", (e) => {
  restricciones(e);
});
