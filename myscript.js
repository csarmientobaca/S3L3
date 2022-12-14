/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */

// const changeTitle = function () {


// }
const changeTitle = nuovoH1 => {

    const h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = nuovoH1

}
changeTitle("questo è il testo cambiato eser. 1")



/* ESERCIZIO 2
   Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

// const addClassToTitle = function () {


// }

const addClassToTitle = () => {

    const h1 = document.querySelector("h1")

    h1.classList.add("myHeading")

}
addClassToTitle()



/* ESERCIZIO 3
   Scrivi una funzione per che cambi il testo dei p figli di un div
  */

// const changePcontent = function () {


// }

const changePcontent = pCambiato => {
    for (let i = 0; i < document.querySelectorAll("div>p").length; i++) {
        const pFigli = document.querySelectorAll("div>p")[i]

        pFigli.innerText = pCambiato
    }

}




/* ESERCIZIO 4
   Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
  */

// const changeUrls = function () {


// }


const changeUrls = () => {
    for (let i = 0; i < document.querySelectorAll("div>a").length; i++) {
        const link = document.querySelectorAll("div>a")[i]

        link.href = "https://www.google.com"

    }



}


/* ESERCIZIO 5
   Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

// const addToTheSecond = function () {


// }

const addToTheSecond = (addli) => {

    const nuovoLi = document.createElement("li")
    nuovoLi.innerText = addli

    const ulSecond = document.getElementById("secondList")
    ulSecond.appendChild(nuovoLi)
}


addToTheSecond("this is a new li added")
/* ESERCIZIO 6
   Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

// const addParagraph = function () {


// }
const addParagraph = () => {

}


/* ESERCIZIO 7
   Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

// const hideFirstUl = function () {


// }
const hideFirstUl = () => {
    const firstUl = document.getElementById("firstList")
    firstUl.style.display = "none"
}


/* ESERCIZIO 8 
   Scrivi una funzione che renda verde il background di ogni lista non ordinata
  */

const paintItGreen = function () {


}

/* ESERCIZIO 9
   Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
  */

const makeItClickable = function () {


}

/* ESERCIZIO 10
   Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
  */

const revealFooterLink = function () {


}

/* ESERCIZIO 11
   Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
   La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {


}

/* ESERCIZIO 12
   Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {


}

/* ESERCIZIO 14
  Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {


}

/* EXTRA ESERCIZIO 15
  Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {


}

/* EXTRA ESERCIZIO 16
  Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {


}
