
function Card(suit, num) {
    this.suit = suit;
    this.rank = num;
}
console.log('test', new Card('spades', 9))

export {Card};