
const titulo = document.querySelector(".Titulo");

const titulo2 = titulo.innerHTML;

const nomeSeparado = titulo2.split("");

titulo.innerHTML = "";

for (let i = 0; i < nomeSeparado.length; i++) {
    // Como se tivesse colocado Window.setTimeout
    // Para retirar o Window e ele se referir ao elemento que está chamando ele, só usar arrow function ()=>
    setTimeout(() => {
      titulo.innerHTML += nomeSeparado[i];
    }, 500 * i);
}


const textarea = document.querySelector(".textarea")
const checkbox = document.querySelector(".check")
const letras = document.querySelector(".letras")
const palavras = document.querySelector(".contagem")

const arr = [textarea, checkbox]
arr.forEach((evento) => {

    evento.addEventListener("change", () => {
        const textareaValue = textarea.value.trim()
        const textareaValueContagemLetras = textareaValue.split("")
        const textareaValueContagemPalavras = textareaValue.split(" ")
        
        // Tirando espaços em branco
        const textareaValueContagemLetrasSemEspacos = textareaValueContagemPalavras.join("")

        
        if (!checkbox.checked) {
            letras.innerHTML = `Quantidade de letras: ${textareaValueContagemLetras.length}`
            palavras.innerHTML = `Quantidade de palavras: ${textareaValueContagemPalavras.length}` 

        } else {
            letras.innerHTML = `Quantidade de letras: ${textareaValueContagemLetrasSemEspacos.length}`
            palavras.innerHTML = `Quantidade de palavras: ${textareaValueContagemPalavras.length}`
        }

    })
})