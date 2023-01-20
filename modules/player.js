
function Player(hand = [], setScore = 0, play = []) {
    this.hand = hand;
    this.scorePile = [];
    this.setScore = setScore;
    this.play = play
    //Hand - current cards available to play
    //ScorePile - cards won so far (if scorePile.length >= 52 - that player wins)
    //setScore - victory count, how many games won in a set
}



export {Player};