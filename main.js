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
let heartImgs = ['','','','','','','','','','','','','']
let diamondImgs = ['','','','','','','','','','','','','']
let spadeImgs = ['','','','','','','','','','','','','']
let clubImgs = ['','','','','','','','','','','','','']

let winStatus = 0;

// Start game //
// ----------------------------------------------------------------- //
function startGame() {


    // Instantiate new cards and push to cards array //
    // ----------------------------------------------------------------- //
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
    // ----------------------------------------------------------------- //
    for (let i = cards.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * i);
        let temp = cards[i];
        cards[i] = cards[r];
        cards[r] = temp;
    }

    // Dynamically render cards //
    // ----------------------------------------------------------------- //


    // Start stopwatch //
    // ----------------------------------------------------------------- //

}

startGame(); // <<<<<<<<<<<< START GAME <<<<<<<<<<<< //
