const btnEncriptar = document.querySelector(".seccion_central_btn_encriptar");
const btnDesencriptar = document.querySelector(
  ".seccion_central_btn_desencriptar"
);

const btnCopiar= document.querySelector(".seccion_derecha_btn_copiar")

const txtAreaEncriptacion = document.querySelector(".seccion_central_txtarea");

const seccion_vacia=document.querySelector(".seccion_derecha_vacia");
const seccion_contenido=document.querySelector(".seccion_derecha_contenido");


const etiquetaTexto = document.querySelector(
  ".seccion_derecha_contenido_texto_encriptado"
);

const restricciones = (event) => {
  let caracter = event.key;

  const caracterEspecialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?´°]/;

  const acentosRegex = /[áéíóúüÁÉÍÓÚÜ]/

  if (event.key.length > 2) {
    return;
    }

  if (
    (caracter >= "0" && caracter <= "9")
  ) {
    event.preventDefault(); 
    return;
  }

  if (caracterEspecialRegex.test(caracter)) {
    event.preventDefault(); 
    return; 
    }

  if (acentosRegex.test(caracter)) {
        event.preventDefault(); 
        return; 
    }

  if(caracter >= "A" && caracter <= "Z"){
    event.preventDefault();
    txtAreaEncriptacion.value+= caracter.toLowerCase()
    return;
  }



};

const modificacionPantalla = () => {
    if(txtAreaEncriptacion.value==""){
        seccion_vacia.style.display="flex";
        seccion_contenido.style.display="none";
    } else{
        seccion_vacia.style.display="none";
        seccion_contenido.style.display="flex";
    }
}

const encriptar = () => {
  let texto = txtAreaEncriptacion.value;

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

btnEncriptar.addEventListener("click", ()=>{encriptar(); modificacionPantalla();});
btnDesencriptar.addEventListener("click", ()=>{desencriptar(); modificacionPantalla();});
btnCopiar.addEventListener("click", copiarTexto)
txtAreaEncriptacion.addEventListener("keydown", (e) => {
  restricciones(e);
});

modificacionPantalla();