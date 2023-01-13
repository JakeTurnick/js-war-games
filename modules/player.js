
function Player(hand = [], setScore = 0) {
    this.hand = hand;
    this.scorePile = [];
    this.setScore = setScore
    //Hand - current cards available to play
    //ScorePile - cards won so far (if scorePile.length >= 52 - that player wins)
    //setScore - victory count, how many games won in a set
}

//Hard-Coded players to start

const player1 = {
    hand : [],
    scorePile: [],

}

export {Player};