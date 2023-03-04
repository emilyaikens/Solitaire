// Create card class //
// ----------------------------------------------------------------- //
class Card {
    constructor(suite, value, color, img, id) {
        this.suite = suite;
        this.value = value;
        this.color = color;
        this.img = img;
        this.id = id;
    }
}

// Game vars //
// ----------------------------------------------------------------- //
let heartImgs = ['images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png',]
let diamondImgs = ['images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png',]
let spadeImgs = ['images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png',]
let clubImgs = ['images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png','images/card_back.png',]

let winStatus = 0;

let [sec, min, hr] = [0, 0, 0];
const stopwatch = document.getElementById("time");

let foundations = document.getElementById('foundations');
let tableau = document.getElementById('tableau');
let deck = document.getElementById('deck')

// Start game //
// ----------------------------------------------------------------- //
function startGame() {


    // Instantiate new cards and push to cards array //
    // ----------------------------------------------------------------------- //
    let cards = []

    function createCards(suite, color, imgs, idMod) {
        for (let i = 1; i < 14; i++) {
            cards.push(new Card (suite, i, color, imgs[i-1], idMod + i))
        };
    }

    createCards('heart', 'red', heartImgs, 0);
    createCards('diamond', 'red', diamondImgs, 13);
    createCards('spade', 'black', spadeImgs, 26);
    createCards('club', 'black', clubImgs, 39);

    // Shuffle cards //
    // Code based on shuffle function from programiz.com //
    // ---------------------------------------------------------------------- //
    for (let i = cards.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * i);
        let temp = cards[i];
        cards[i] = cards[r];
        cards[r] = temp;
    }

    // Dynamically render cards //
    // ---------------------------------------------------------------------- //

    function addFrontBack(side, i) {
        let card = document.createElement('img');
        card.className = side;
        card.src = cards[i].img;
        thisCard = document.getElementById(cards[i].id);
        thisCard.appendChild(card);
    }

    // Deck
    for (i = 0; i < 24; i++) {
        let deckCard = document.createElement('div');
        deckCard.classList.add('deck-card', 'card');
        deckCard.setAttribute('id', cards[i].id);
        deckCard.style.zIndex = i;
        deck.appendChild(deckCard);

        addFrontBack('front', i);
        // addFrontBack('back', i);
    }

    // Foundations
    for (i = 0; i < 4; i++) {
        let fdt = document.createElement('img');
        fdt.className = 'card';
        fdt.src = 'images/green.jpeg';
        fdt.style.zIndex = 0;
        foundations.appendChild(fdt);
    };

    // Tableau
    idxCounter = 24;
    topCountT = 0;

    for (i = 1; i < 8; i++) {
        let tabCol = document.createElement('div');
        tabCol.className = 'tab-col';
        tabCol.setAttribute('id', `tab-col-${i}`);
        tabCol.style.left = `${i * 100}px`;
        tableau.appendChild(tabCol);
        for(j = 0; j < i; j++) {
            let tabCard = document.createElement('div');
            tabCard.classList.add('tab-card', 'card');
            tabCard.setAttribute('id', cards[idxCounter].id)
            tabCard.style.zIndex = j;
            tabCard.style.top = `${15 * topCountT}px`;
            if (j === (i-1)) {
                tabCard.classList.add('flipped');
            }
            tabCol.appendChild(tabCard);

            addFrontBack('front', idxCounter);
            // addFrontBack('back', idxCounter);

            idxCounter++;
            topCountT++;
        }
        topCountT = 0;
    }

    // Start stopwatch //
    // ---------------------------------------------------------------------- //
    // int = setInterval(startStopwatch, 1000) // -----------------------------<<<<<<<<<<<<<<<<<<< COMMENT IN TO START TIMER

    function startStopwatch() {
        sec ++;
        if (sec == 60) {
            sec = 0;
            min ++;
            if (min == 60) {
                min = 0;
                hr ++;
            }
        }

        // Add a 0 before nums < 10
        let h = hr < 10 ? '0' + hr : hr;
        let m = min < 10 ? '0' + min : min;
        let s = sec < 10 ? '0' + sec : sec;

        // Update innerHTML of stopwatch div
        stopwatch.innerHTML = `${h} : ${m} : ${s}`;
    }

} // End of startGame function

startGame(); // <<<<<<<<<<<< START GAME <<<<<<<<<<<< //


// Card movements //
// ----------------------------------------------------------------- //

deckCards = document.querySelectorAll('.deck-card');
    
zCountD = 0;

deckCards.forEach(function(c) {
    c.addEventListener('click', function stackDeck() {
        c.style.left = '100px';
        c.style.top = `${15 * zCountD}px`;
        c.style.zIndex = zCountD;
        zCountD++;
        c.removeEventListener('click', stackDeck)
    })
})

