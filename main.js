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

let [sec, min, hr] = [0, 0, 0];
const stopwatch = document.getElementById("time");

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
    // int = setInterval(startStopwatch, 1000) // -----------------------------<<<<<<<<<<<<<<<<<<< COMMENT IN TO START TIMER

    function startStopwatch() {

        // Increase sec, min, hr
        sec ++;
        if (sec == 60) {
            sec = 0;
            min ++;
            if (min == 60) {
                min = 0;
                hr ++;
            }
        }

        // Conditionals to make sure there's a 0 before nums < 10
        let h = hr < 10 ? '0' + hr : hr;
        let m = min < 10 ? '0' + min : min;
        let s = sec < 10 ? '0' + sec : sec;

        // Update innerHTML of stopwatch div
        stopwatch.innerHTML = `${h} : ${m} : ${s}`;
    }

} // End of startGame function

startGame(); // <<<<<<<<<<<< START GAME <<<<<<<<<<<< //
