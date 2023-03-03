// create card class //
// ----------------------------------------------------------------- //
class Card {
    constructor(suite, value, color, img) {
        this.suite = suite;
        this.value = value;
        this.color = color;
        this.img = img;
    }
}


// array of links to card images //
// ----------------------------------------------------------------- //
let heartImgs = ['','','','','','','','','','','','','']
let diamondImgs = ['','','','','','','','','','','','','']
let spadeImgs = ['','','','','','','','','','','','','']
let clubImgs = ['','','','','','','','','','','','','']


// instantiate new cards and push to card array //
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