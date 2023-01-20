import Card from "./card.js";


function Deck() {
    this.deck = this.buildDeck();
}

Deck.prototype.buildDeck = function buildDeck() {
    const deck = {};
    const deckArr = [];
    let suit = '';

    for (let i = 0; i < 52; i++) {
        suit = i / 13; 
        switch (Math.floor(suit)) {
            case 0:
                suit = 'Clubs';
                break;
            case 1:
                suit = 'Diamonds';
                break;
            case 2:
                suit = 'Hearts';
                break;
            case 3:
                suit = 'Spades';
                break;
        };
    
        let currRank = (i + 1) % 13;
        // console.log(new makeCard(suit, i));
        switch (currRank) {
            case 1:
                currRank = 'A'
                break;
            case 11:
                currRank = 'J';
                break;
            case 12:
                currRank = 'Q';
                break;
            case 0:
                currRank = 'K';
                break;
        }
        // console.log(suit, currRank)
        deck[i] = new Card(suit, currRank)
        deckArr.push(new Card(suit, currRank))
    }
    // console.log('deckArr', deckArr);
    return deckArr;
}

export { Deck }