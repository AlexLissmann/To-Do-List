// AufgabeHinzufügen Hover Bild ändern


const KreuzAufgabeHinzufuegen = document.getElementsByClassName("AufgabeDazu")[0]; 
KreuzAufgabeHinzufuegen.addEventListener("mouseover", ()=>{
image = document.getElementsByClassName("KreuzAufgabeHinzufuegen")[0];
image.src = "src/RotAufgabeHinzufuegenHover.png"
text = document.querySelector("p").style.color = "red";

})

KreuzAufgabeHinzufuegen.addEventListener("mouseout", ()=>{
image = document.getElementsByClassName("KreuzAufgabeHinzufuegen")[0];
image.src = "src/KreuzAufgabehinzufuegen.png"
text = document.querySelector("p").style.color = "black";
})

// Aufgabe Hinzufügen

function Elementehinzufuegen(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}
// 
const EingabeFeld = Elementehinzufuegen('<input placeholder="Aufgabe" class="TextEingabe" class="inline" type="text">')
KreuzAufgabeHinzufuegen.addEventListener("click", ()=>{
//    KreuzAufgabeHinzufuegen.remove();   
    KreuzAufgabeHinzufuegen.replaceWith(EingabeFeld);
})

