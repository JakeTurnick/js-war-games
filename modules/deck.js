import { makeCard } from "./card.js";


function Deck() {
    this.deck = buildDeck();
}



function buildDeck() {
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
                currRank = 'a'
                break;
            case 11:
                currRank = 'j';
                break;
            case 12:
                currRank = 'q';
                break;
            case 0:
                currRank = 'k';
                break;
        }
        console.log(suit, currRank)
        deck[i] = new makeCard(suit, currRank)
        deckArr.push(new makeCard(suit, currRank))
    }
    console.log('deckArr', deckArr);
    return deckArr;
}

function shuffle(deck) {
    //using deck.length so you can use fresh deck or discard pile as deck
    //may need to use deck.deck to grab array
    let cards = deck.deck; //deck is object containing the array: .deck
    let shuffled = [];
    console.log('deck', cards.length)
    for (let i = 0; i < cards.length; i++) {
        let newCard = cards[Math.floor(Math.random() * 52)];
        // console.log('new card', newCard)
        while (shuffled.includes(newCard)) {
            newCard = cards[Math.floor(Math.random() * 52)];
        }
        shuffled.push(newCard);
    }
    console.log('shuffled deck', shuffled)
    return shuffled
};



// console.log(buildDeck())

export {buildDeck, Deck, shuffle}