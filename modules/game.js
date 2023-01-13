import { Deck } from "./deck.js";
import {Player} from "./player.js"

function Game() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.playDeck = new Deck().shuffle();
}

Game.prototype.deal = function(deck) {
    console.log('value of this', this)
    for (let i = 0; i < this.playDeck.length; i++) {
        if (i % 2) {
            this.player1.hand.push(this.playDeck[i])
        } else {
            this.player2.hand.push(this.playDeck[i])
        }
    }
    console.log('P1', this.player1.hand, '\nP2', this.player2.hand)
}

export {Game};