// Create card class //
// ----------------------------------------------------------------- //
class Card {
    constructor(suite, value, color, img) {
        this.suite = suite;
        this.value = value;
        this.color = color;
        this.img = img;
    }
}

// Arrays of links to card images //
// ----------------------------------------------------------------- //
let heartImgs = ['','','','','','','','','','','','','']
let diamondImgs = ['','','','','','','','','','','','','']
let spadeImgs = ['','','','','','','','','','','','','']
let clubImgs = ['','','','','','','','','','','','','']


// Start game //
// ----------------------------------------------------------------- //
function startGame() {


    // Instantiate new cards and push to cards array //
    // ----------------------------------------------------------------- //
    let cards = []

    function createCards(suite, color, imgs) {
        for (let i = 1; i < 14; i++) {
            cards.push(new Card (suite, i, color, imgs[i-1]))
        };
    }

    createCards('heart', 'red', heartImgs);
    createCards('diamond', 'red', diamondImgs);
    createCards('spade', 'black', spadeImgs);
    createCards('club', 'black', clubImgs);


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


    // Start timer //
    // ----------------------------------------------------------------- //


}

startGame(); // <<<<<<<<<<<< START GAME <<<<<<<<<<<< //
