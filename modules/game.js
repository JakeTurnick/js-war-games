import { Deck } from "./deck.js";
import { Player } from "./player.js"

function Game() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.playDeck = new Deck();
    this.pot = [];
}

// Game.prototype.war = function() {
    //draw 4 cards, play last, winner takes all cards
// }

Game.prototype.play = function() {
    //normal round
    let p1Play = this.player1.hand.splice(0,1);
    let p2Play = this.player2.hand.splice(0,1);
    p1Play = p1Play[0];
    p2Play = p2Play[0];
    // console.log('\nP1', p1Play.rank, typeof p1Play.rank, '\nP2', p2Play.rank, typeof p2Play.rank)
    //Converts facecards to number values for comparing & win/loss
    if (typeof p1Play.rank === "string") {
        switch(p1Play.rank) {
            case 'j':
                p1Play.rank = 11;
                break;
            case 'q':
                p1Play.rank = 12;
                break;
            case 'k':
                p1Play.rank = 13;
                break;
            case 'a':
                p1Play.rank = 14;
                break;
        }
    }
    if (typeof p2Play.rank === "string") {
        switch(p2Play.rank) {
            case 'j':
                p2Play.rank = 11;
                break;
            case 'q':
                p2Play.rank = 12;
                break;
            case 'k':
                p2Play.rank = 13;
                break;
            case 'a':
                p2Play.rank = 14;
                break;
        }
    }
    

    //Comparing cards, declaring winner, adding cards to score pile
    console.log('\nP1 Plays:', p1Play.rank, '\nP2 Plays:', p2Play.rank)
    //if war --> war round else --> normal round
    if (p1Play.rank === p2Play.rank) {
        console.log('WAR!!')
    } else if (p1Play.rank > p2Play.rank) {
        this.player1.scorePile.push(p1Play, p2Play);
        console.log('\nP1 wins!', this.player1.scorePile);
    } else {
        this.player2.scorePile.push(p1Play, p2Play);
        console.log('\nP2 wins!', this.player2.scorePile);
    }
}

Game.prototype.deal = function() {
    // console.log('value of this', this)
    // ^^ Game {player1: Player, player2: Player, playDeck: Array(52)}
    console.log('playDeck', this.playDeck)
    console.log('players', this.player1.hand)
    for (let i = 0; i < this.playDeck.deck.length; i++) {
        if (i % 2) {
            this.player1.hand.push(this.playDeck.deck[i])
        } else {
            this.player2.hand.push(this.playDeck.deck[i])
        }
    }
    // console.log('P1', this.player1.hand, '\nP2', this.player2.hand)
    // ^^ displays array of 26 cards in each players hand
}

Game.prototype.shuffleDeck = function shuffle() {
    //using deck.length so you can use fresh deck or discard pile as deck
    //may need to use deck.deck to grab array
    console.log('\nPreShuffle playdeck', this.playDeck.deck)
    let cards = this.playDeck.deck; //deck is object containing the array: .deck
    let shuffled = [];
    // console.log('deck', cards.length)
    for (let i = 0; i < cards.length; i++) {
        let newCard = cards[Math.floor(Math.random() * 52)];
        // console.log('new card', newCard)
        while (shuffled.includes(newCard)) {
            newCard = cards[Math.floor(Math.random() * 52)];
        }
        shuffled.push(newCard);
    }

    this.playDeck.deck = shuffled;
};

export { Game };