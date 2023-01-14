// import game from './modules/game.js';
// import { Deck } from './modules/deck.js';
import {Game} from  './modules/game.js'

// let test = new Deck;
// test.buildDeck();
// console.log('new Deck test', test);
// let shuffleTest = test.shuffle();
// console.log(test.deck.length);
// console.log('shuffle Deck test', new Deck().shuffle())
// console.log(test)

console.log('\n');
let newGame = new Game;
console.log("new game", newGame)
// console.log('Deal', newGame.deal())
// console.log('\nShuffled:', newGame.playDeck.shuffle(), '\nRe shuffled', newGame.playDeck.reShuffle())
newGame.shuffleDeck();
// console.log('what I want',newGame.playDeck.deck) // currently undefined
newGame.deal();
// console.log('\nPost Deal', newGame)
newGame.play();
for (let i = 0; i < 100; i++) {
    newGame.play();
}
newGame.scoreShuffle();
