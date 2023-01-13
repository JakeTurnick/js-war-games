// import game from './modules/game.js';
import { Deck } from './modules/deck.js';
import {Game} from  './modules/game.js'

let test = new Deck;
test.buildDeck();
console.log('new Deck test', test);
let shuffleTest = test.shuffle();
console.log(test.deck.length);
console.log('shuffle Deck test', new Deck().shuffle())
console.log(test)

console.log('\n');
let newGame = new Game;
console.log("new game", newGame)
console.log(newGame.deal())