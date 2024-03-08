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