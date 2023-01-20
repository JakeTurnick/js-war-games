// import game from './modules/game.js';
// import { Deck } from './modules/deck.js';
import {Game} from  './modules/game.js'

//on Screen game elements
const btnDraw = document.getElementById("draw")
const btnStart = document.getElementById("start")
const btnRestart = document.getElementById("restart")
const roundInfo = document.getElementById("round-info")
//Player 1
const p1Card = document.querySelector(".p1.card");
const p1Rank = document.querySelector(".p1.rank");
const p1Suit = document.querySelector(".p1.suit");
const p1Hand = document.querySelector(".p1.hand");
//Player2
const p2Card = document.querySelector(".p2.card");
const p2Rank = document.querySelector(".p2.rank");
const p2Suit = document.querySelector(".p2.suit");
const p2Hand = document.querySelector(".p2.hand");


let p1PlayRank;
let p1PlaySuit;
let p2PlayRank;
let p2PlaySuit;

btnDraw.addEventListener('click', () => {
    console.log('the draw:', currentGame.draw())

    roundInfo.innerHTML = `Round winner: ${currentGame.roundWin}`;
    if (currentGame.winner) {
        roundInfo.innerHTML = `We have a winner!\n Congradulations ${currentGame.winner}`;
    }

    p1PlayRank = currentGame.player1.play.rank;
    p1PlaySuit = currentGame.player1.play.suit.toLowerCase();
    p2PlayRank = currentGame.player2.play.rank;
    p2PlaySuit = currentGame.player2.play.suit.toLowerCase();
    
    p1Rank.innerHTML = p1PlayRank;
    p2Rank.innerHTML = p2PlayRank;


    p1Suit.src = `./imgs/suits/${p1PlaySuit}.png`;
    p2Suit.src = `./imgs/suits/${p2PlaySuit}.png`;

    p1Hand.innerHTML = `P1 Hand: ${currentGame.player1.hand.length}`;
    p2Hand.innerHTML = `P2 Hand: ${currentGame.player2.hand.length}`;

})

let i = 0;
let totalGames = [];
let currentGame

btnStart.addEventListener('click', () => {
    totalGames.push(new Game())
    currentGame = totalGames[i];
    i++;
    currentGame.shuffleDeck();
    currentGame.deal();
    console.log('total games: ', totalGames)
    console.log('current game: ', currentGame)
    // let newGame = new Game;
    // console.log(newGame)
    // newGame.shuffleDeck()
    // newGame.deal();

    roundInfo.innerHTML = 'New game'
    p1Rank.innerHTML = '0';
    p2Rank.innerHTML = '0';
    p1Suit.src = ' ';
    p2Suit.src = ' ';

    p1Hand.innerHTML = `P1 Hand: ${currentGame.player1.hand.length}`;
    p2Hand.innerHTML = `P2 Hand: ${currentGame.player2.hand.length}`;

    
});