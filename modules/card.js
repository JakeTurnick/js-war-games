
function makeCard(suit, num) {
    this.suit = suit;
    this.rank = num;
}
console.log('test', new makeCard('spades', 9))

export {makeCard};