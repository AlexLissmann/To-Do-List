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
const EingabeFeld = Elementehinzufuegen('<form id="myForm"><input placeholder="Aufgabe" class="TextEingabe" class="inline" type="text"></form><input type="submit" class="noshowbutton">')
KreuzAufgabeHinzufuegen.addEventListener("click", ()=>{
//    KreuzAufgabeHinzufuegen.remove();   
    KreuzAufgabeHinzufuegen.replaceWith(EingabeFeld);
})

document.getElementsByClassName("TextEingabe")[0].addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
//        document.getElementsByClassName("noshowbutton")[0].click();
        let inputWert = document.getElementsByClassName("TextEingabe").value;
        console.log("Eingabe:", inputWert);
      }
})
