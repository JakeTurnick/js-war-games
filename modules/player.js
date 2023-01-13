
function Player(hand = [], setScore = 0) {
    this.hand = hand;
    this.scorePile = [];
    this.setScore = setScore
    //Hand - current cards available to play
    //ScorePile - cards won so far (if scorePile.length >= 52 - that player wins)
    //setScore - victory count, how many games won in a set
}



export {Player};