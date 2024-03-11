//dichiaro un array con all'interno le stringhe formate dal percorso delle immagini

const imagesArray = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]; //array[string]


//recupero dal DOM l'elemento con classe items_container con un queryselector tramite la classe
const itemsContainerDOMELEMENT = document.querySelector(".items_container")

//inserisco all'interno di questo elemento (itemsContainerDOMELEMENT) le varie immagini

    //utilizzo un ciclo for per iterare ogni singolo elemento dell'imagesArray    
for (let index = 0; index < imagesArray.length; index++){
    
    //dichiaro una const alla quale assegno il valore del singolo elemento dell'imagesArray per semplificarmi il lavoro    
        const imageSRC = imagesArray[index];
        
    //Dichiaro una const dove inserisco la struttura html che mi serve, dove vado quindi ad inserire all'interno del template literal
    //la const precedentemente creata (imageSRC) con all'interno il valore del singolo elemento dell'imagesArray
        const sliderItemHTML = `
        <div class="item">
            <img src="${imageSRC}" alt="">
        </div>
        `
    //inserico questa struttura html appena creata, all'interno dell'items_container nell html stesso, concatenandola        
        itemsContainerDOMELEMENT.innerHTML += sliderItemHTML;

}


//procedo a selezionare la prima immagine per poi assegnargli la classe active

    //dichiaro una const e recupero tutti i div con classe item tramite getElementsByClassName
const divItemList = document.getElementsByClassName("item") //HTMLCollection che è una sorta di array

    //dichiaro una variabile alla quale assegno 0 quindi un valore number (che potrò quindi incrementare)
    //da assegnare come indice al div che riceverà la classe active
let activeItemIndex = 0;

//dichiaro una variabile che rappresenterà la massima lunghezza dell'indice del nostro array
const lastIndex = imagesArray.length - 1
  
divItemList[activeItemIndex].classList.add("active");
    

//procedo a recuperare dal DOM l'elemento con classe next tramite query selector
const next = document.querySelector(".next")

//resto all'ascolto del click su questo elemento e faccio si che ad ogni click la classe active verrà assegnata al div successivo
//(andando quindi ad incrementare di 1 l'indice assegnato a divItemList quindi l'activeItemIndex)
next.addEventListener("click", function(){


    //aggiungo il loop che mi permette di scorrere le immagini all'infinito andando in avanti
    if (activeItemIndex < lastIndex){

        //rimuovo la classe active dall'elemento corrente. L'elemento corrente sarà quello che attualmente avrà la classe active
        divItemList[activeItemIndex].classList.remove("active")
        
        //incremento activeItemIndex di 1
        activeItemIndex++;
        
        //aggiungo la classe active al nuovo elemento
        divItemList[activeItemIndex].classList.add("active");

    }else if (activeItemIndex === lastIndex) {

        activeItemIndex = 0

        
        divItemList[4].classList.remove("active")
        
       
        divItemList[activeItemIndex].classList.add("active");
    }
    
})


//procedo a recuperare dal DOM l'elemento con classe prev tramite query selector
const prev = document.querySelector(".prev")

//resto all'ascolto del click su questo elemento e faccio si che ad ogni click la classe active verrà assegnata al div precedente
//(andando quindi a decrementare di 1 l'indice assegnato a divItemList quindi l'activeItemIndex)
prev.addEventListener("click", function(){
    
    //aggiungo il loop che mi permette di scorrere le immagini all'infinito andanto all'indietro
    if (activeItemIndex > 0){

        //rimuovo la classe active dall'elemento corrente. L'elemento corrente sarà quello che attualmente avrà la classe active
        divItemList[activeItemIndex].classList.remove("active")
        
        //decremento activeItemIndex di 1
        activeItemIndex--;
        
        //aggiungo la classe active al nuovo elemento
        divItemList[activeItemIndex].classList.add("active");

    }else if (activeItemIndex === 0) {

        activeItemIndex = lastIndex

        
        divItemList[0].classList.remove("active")
        
        
        divItemList[activeItemIndex].classList.add("active");

    }
    
})