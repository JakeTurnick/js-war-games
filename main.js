// import game from './modules/game.js';
import { Deck } from './modules/deck.js';

let test = new Deck;
test.buildDeck();
console.log('new Deck test', test);
let shuffleTest = test.shuffle();
console.log(test.deck.length);
console.log('shuffle Deck test', shuffleTest)
console.log(test)