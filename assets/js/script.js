
/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
let newTitle = 'Nuovo Titolo';

const changeTitle = function () {
    document.getElementsByTagName('h1')[0].innerText = 'NUOVO TITOLO'
}

changeTitle();
/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    const pageTitle = document.querySelector('h1');

    if (pageTitle) {
        pageTitle.classList.add('myHeading');
    } else {
        console.error("Elemento del titolo non trovato");
    }
}

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    const mioDiv = document.getElementById('mioDiv');


    if (mioDiv) {
        const paragrafi = mioDiv.getElementsByTagName('p');
        for (let i = 0; i < paragrafi.length; i++) {
            paragrafi[i].innerText = "NUOVO TESTO DEL PARAGRAFO";
        }
    } else {
        console.error("Elemento div non trovato");
    }
}
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    const tuttiIlink = document.querySelectorAll('a');

    tuttiIlink.forEach(function (link) {
        if (!link.closest('footer')) {
            link.href = 'https://www.google.com';
        }
    });
}

changeUrls();


/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const secondaLista = document.querySelectorAll('ul')[1];


    if (secondaLista) {

        const nuovoElementoLista = document.createElement('li');
        nuovoElementoLista.innerText = 'Nuovo Elemento';
        secondaLista.appendChild(nuovoElementoLista);
    } else {
        console.error("Seconda lista non trovata");
    }
};

addToTheSecond();
/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {

    const selettoreDiv = document.getElementsByTagName('div')[0];

    if (selettoreDiv) {
        const nuovoParagrafo = document.createElement('p');
        nuovoParagrafo.innerText = 'Salve sono il nuovo paragrafo';
        selettoreDiv.appendChild(nuovoParagrafo);
    } else {
        console.error('Div non trovato');
    }
}

addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {

    const selettoreLista = document.querySelectorAll('ul')[0];

    if (selettoreLista) {
        selettoreLista.style.display = 'none';
    } else {
        console.error('Lista non trovata');
    }

}

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    const selettoreListe = document.querySelectorAll('ul');

    if(selettoreListe){
         for( let i = 0; i < selettoreListe.length; i++) {
        selettoreListe[i].style.backgroundColor = 'green'; 
    }
    } else {
        console.error('non ho trovato la lista');
    }

   
}
paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
    const selettore = document.getElementsByTagName('h1')[0];

    if(selettore) {
        selettore.addEventListener('click', function() {
            const newTest = selettore.innerText.slice(0, -1);

            selettore.innerText = newTest;

        });
    } else {
        console.error('H1 non trovato');
    }
 }
 makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {
    const linkNelFooter = document.querySelector('footer');

    // Verifica se l'elemento link nel footer è stato trovato
    if (linkNelFooter) {
        // Aggiungi un listener di clic all'elemento link nel footer
        linkNelFooter.addEventListener('click', function(event) {
            // Evita il comportamento predefinito del link
            event.preventDefault();

            // Ottieni l'URL del link nel footer
            const url = linkNelFooter.href;

            // Mostra l'URL in un alert
            alert(url);
        });
    } else {
        console.error("Elemento link nel footer non trovato");
    }
};

revealFooterLink();
 

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {
    const tableArea = document.getElementById('tableArea');

    if (tableArea) {
        const nuovaTabella = document.createElement('table');
        nuovaTabella.border = '2';
        tableArea.appendChild(nuovaTabella);
    } else {
        console.error('tableArea non trovato');
    }
 }

 generateTable();
/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {
    const table = document.querySelector('#tableArea table');

    if (table) {
        // Crea una nuova riga
        const newRow = table.insertRow();
        newRow.innerText = 'Ciao';


    } else {
        console.error('tableArea non trovata'); 
    }

 }

 addRow();

/* ESERCIZIO 13
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 14
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
    const changeMyColor = document.getElementById('changeMyColor');

    if(changeMyColor) {
        changeMyColor.addEventListener('click', function(){
            const coloreCasuale = '#' + Math.floor(Math.random()* 16777215).toString(16);
            changeMyColor.style.color = coloreCasuale;

        }) 
    } else {
        console.error('non ho trovato niente in change my color');
    }
 }

 changeColorWithRandom();
