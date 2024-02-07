function textAsigned(idName, text){
    let HTMLElement = document.getElementById(idName);
    HTMLElement.innerHTML = text;
    return;
}

function displayType(idName, displayType){
    let CSSElement = document.getElementById(idName);
    CSSElement.style.display = displayType;
}

function spaceBetween(className){
    document.querySelector(className).style.justifyContent = "space-between";

}

textAsigned('title','Ningun Mensaje fue encontrado')
textAsigned('text','Ingresa el texto que deseas encriptar o desencriptar')

function encrypt() {
    // Primero, obtenemos el valor del textarea
    let inputText = document.getElementById('text-to-encrypt').value;

    // Luego aplicamos los reemplazos a esa cadena de texto
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if(inputText === ''){
        return;
    } else{
        displayType('encrypted-text', 'block');
        spaceBetween('.text-container')
        displayType('copy', 'block');
        displayType('title','none');
        displayType('text', 'none');
        displayType('toy', 'none');
        textAsigned('encrypted-text', encryptedText);
    }
}

function decrypt() {
    // Primero, obtenemos el valor del textarea
    let inputText = document.getElementById('text-to-encrypt').value;

    // Luego aplicamos los reemplazos a esa cadena de texto
    let encryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

      if(inputText === ''){
        return;
    } else{
        displayType('encrypted-text', 'block');
        spaceBetween('.text-container')
        displayType('copy', 'block');
        displayType('title','none');
        displayType('text', 'none');
        displayType('toy', 'none');
        textAsigned('encrypted-text', encryptedText);
    }
}



function copyText() {
    let copiedText = document.getElementById("encrypted-text").innerHTML;
    
    // Usar la Clipboard API para copiar el texto
    navigator.clipboard.writeText(copiedText).then(() => {
        console.log("Texto copiado al portapapeles con éxito.");
        }).catch(err => {
        console.error("Error al copiar texto al portapapeles: ", err);
        });
    }
    


