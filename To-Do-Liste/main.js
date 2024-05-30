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
const EingabeFeld = Elementehinzufuegen('<form class="myForm"><input placeholder="Aufgabe" class="TextEingabe" class="inline" type="text"></form><input type="submit" class="noshowbutton">');

KreuzAufgabeHinzufuegen.addEventListener("click", () => {
    KreuzAufgabeHinzufuegen.replaceWith(EingabeFeld);

let CounterEingabeMenge = 0;    

    const EingabeAuslesen = document.getElementsByClassName("TextEingabe")[0];
    EingabeAuslesen.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            let inputWert = EingabeAuslesen.value;
            console.log("Eingabe:", inputWert);
            CounterEingabeMenge ++;
            console.log(CounterEingabeMenge);
            localStorage.setItem("AufgabeEingabeNummer" + CounterEingabeMenge, inputWert);
            console.log(localStorage.getItem("AufgabeEingabeNummer3"));

            //Neue Zeile generieren

            const ZeileMitAufgabe = Elementehinzufuegen('<div class="Zeile" class="ZeileMitAufgabe"><div class="Aufgabe"><button class="dynamischeKlasse KreisleerButton inline"></button><p class="AufgabeText" class="inline">asdfgj</p><button class="Muelleimer"><img class="inline" src="src/whitebin.png" alt="whitebin"></button></div></div>')
            const Anhaengen = document.getElementsByClassName("BereichMitAufgaben")[0];
            Anhaengen.append(ZeileMitAufgabe);

            //dynamische Klasse hinzufügen
            
            const dynamischKreisLeerButton = document.getElementsByClassName("dynamischeKlasse")[0]
            dynamischKreisLeerButton.classList.remove("dynamischeKlasse");
            dynamischKreisLeerButton.classList.add("KreisLeerButtonNummer" + CounterEingabeMenge);
            console.log(dynamischKreisLeerButton.classList.contains("KreisLeerButtonNummer1"));
            
            // Aufgabe in neu generierte Zeile geben
            
            document.getElementsByClassName("AufgabeText")[0].innerHTML = inputWert;
            
            //EingabeFeld resetten

            document.getElementsByClassName("myForm")[0].reset();

            
        }
    })
})

//Aufgbe abhaken

const AbhakenDerAufgabe = document.getElementsByClassName("KreisleetButton")