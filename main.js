// import game from './modules/game.js';
import { buildDeck, Deck, shuffle } from './modules/deck.js';

let test = new Deck;
console.log('this one', test);
let shuffleTest = shuffle(test);
console.log(test.deck.length);
// console.log(shuffleTest)