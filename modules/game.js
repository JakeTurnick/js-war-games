import { Deck } from "./deck.js";
import { Player } from "./player.js";

function Game() {
  this.player1 = new Player();
  this.player2 = new Player();
  this.playDeck = new Deck();
  this.pot = [];
  this.roundWin;
  this.winner = "";
}

//Shuffle from score pile is not needed

// Game.prototype.scoreShuffle = function() {
//     console.log('score shuffle')
//     //check if hand is empty, if so - shuffle scorePile and set it to player.hand
//     if (this.player1.hand.length === 0) {
//         this.player1.hand = this.player1.scorePile.shuffleDeck();
//         console.log('Shuffled P1\'s score into their hand')
//     }
// }

Game.prototype.draw = function () {
  if (this.player1.hand.length < 1 || this.player2.hand.length < 1) {
    if (this.player1.score > this.player2.score) {
      this.winner = "Player 1";
      this.player1.setScore += 1;
      return;
    } else {
      this.winner = "Player 2";
      this.player2.setScore += 1;
      return;
    }
  }

  //normal round
  let p1Play = this.player1.hand.splice(0, 1)[0];
  let p2Play = this.player2.hand.splice(0, 1)[0];
  this.player1.play = p1Play;
  this.player2.play = p2Play;
  // p1Play = p1Play[0];
  // p2Play = p2Play[0];
  console.log(
    "\nP1",
    p1Play.rank,
    this.player1.hand.length,
    "\nP2",
    p2Play.rank,
    this.player2.hand.length
  );
  // debugger
  //Converts facecards to number values for comparing & win/loss
  if (typeof p1Play.rank === "string") {
    switch (p1Play.rank) {
      case "J":
        p1Play.rank = 11;
        break;
      case "Q":
        p1Play.rank = 12;
        break;
      case "K":
        p1Play.rank = 13;
        break;
      case "A":
        p1Play.rank = 14;
        break;
    }
  }
  if (typeof p2Play.rank === "string") {
    switch (p2Play.rank) {
      case "J":
        p2Play.rank = 11;
        break;
      case "Q":
        p2Play.rank = 12;
        break;
      case "K":
        p2Play.rank = 13;
        break;
      case "A":
        p2Play.rank = 14;
        break;
    }
  }
  this.compare(p1Play, p2Play);
  return [p1Play, p2Play];
};

// ^^^ DRAWING ^^^
// COMPARE & WAR -->

Game.prototype.compare = function (p1Play, p2Play) {
  console.log("compare", p1Play, p2Play);

  //Comparing cards, declaring winner, adding cards to score pile
  //console.log('\nP1 Plays:', p1Play.rank, '\nP2 Plays:', p2Play.rank)
  //if war --> war round else --> normal round
  if (p1Play.rank === p2Play.rank) {
    //Can you participate in WAR?
    if (this.player1.hand.length < 4) {
      console.log("Player 2 is the winner!");
      this.winner = "Player 2";
      this.player1.setScore += 1;
      return;
    } else if (this.player2.hand.length < 4) {
      console.log("Player 1 is the winner!");
      this.winner = "Player 1";
      this.player1.setScore += 1;
      return;
    }

    //Go ahead
    console.log("WAR!!");
    let p1War = this.player1.hand.splice(0, 4);
    let p2War = this.player2.hand.splice(0, 4);

    console.log(p1Play, p2Play);
    console.log("\nP1War:", p1War, "\nP2War:", p2War);

    p1War.forEach((card) => {
      if (typeof card.rank === "string") {
        switch (card.rank) {
          case "J":
            card.rank = 11;
            break;
          case "Q":
            card.rank = 12;
            break;
          case "K":
            card.rank = 13;
            break;
          case "A":
            card.rank = 14;
            break;
        }
      }
    });
    p2War.forEach((card) => {
      if (typeof card.rank === "string") {
        switch (card.rank) {
          case "J":
            card.rank = 11;
            break;
          case "Q":
            card.rank = 12;
            break;
          case "K":
            card.rank = 13;
            break;
          case "A":
            card.rank = 14;
            break;
        }
      }
    });

    if (p1War[3].rank > p2War[3].rank) {
      console.log("\nP1 wins the war!");
      this.player1.score += 1;
      console.log("p1 score", this.player1.score);
      this.roundWin = "Player 1 wins a war!";
      // console.log(p1War)
      // console.log(p1Play);
      //groups all cards played in war
      let cards = [];
      cards.push(p1Play);
      cards.push(p2Play);
      p1War.forEach((card) => cards.push(card));
      p2War.forEach((card) => cards.push(card));
      // console.log("\nWar loot:", cards);

      //return cards from values to faces
      cards.forEach((card) => {
        if (card.rank > 10) {
          switch (card.rank) {
            case 11:
              card.rank = "J";
              break;
            case 12:
              card.rank = "Q";
              break;
            case 13:
              card.rank = "K";
              break;
            case 14:
              card.rank = "A";
              break;
          }
        }
      });
      //push cards back into player hand
      // cards.forEach(card => {
      //     this.player1.hand.push(card);
      // });
      console.log(this.player1.hand);
    } else if (p2War[3].rank > p1War[3].rank) {
      console.log("\nP2 wins the war!");
      this.player2.score += 1;
      console.log("p2 score", this.player2.score);
      this.roundWin = "Player 2 wins a war!";
      // console.log(p2War)
      // console.log(p2Play)
      let cards = [];
      cards.push(p1Play);
      cards.push(p2Play);
      p1War.forEach((card) => cards.push(card));
      p2War.forEach((card) => cards.push(card));
      // console.log("\nWar loot:", cards);

      //return cards from values to faces
      cards.forEach((card) => {
        if (card.rank > 10) {
          switch (card.rank) {
            case 11:
              card.rank = "J";
              break;
            case 12:
              card.rank = "Q";
              break;
            case 13:
              card.rank = "K";
              break;
            case 14:
              card.rank = "A";
              break;
          }
        }
      });
      //push cards back into player hand
      // cards.forEach(card => {
      //     this.player2.hand.push(card);
      // });
      // console.log(this.player2.hand);
    }
    //war ends here
  } else if (p1Play.rank > p2Play.rank) {
    let cards = [p1Play, p2Play];
    cards.forEach((card) => {
      if (card.rank > 10) {
        switch (card.rank) {
          case 11:
            card.rank = "J";
            break;
          case 12:
            card.rank = "Q";
            break;
          case 13:
            card.rank = "K";
            break;
          case 14:
            card.rank = "A";
            break;
        }
      }
    });
    console.log(cards[0], cards[1]);
    this.roundWin = "Player 1";
    this.player1.score += 1;
    console.log("p1 score", this.player2.score);
    // this.player1.hand.push(cards[0], cards[1]);
    console.log("\nP1 wins!", this.player1.hand);
  } else {
    let cards = [p1Play, p2Play];
    cards.forEach((card) => {
      if (card.rank > 10) {
        switch (card.rank) {
          case 11:
            card.rank = "J";
            break;
          case 12:
            card.rank = "Q";
            break;
          case 13:
            card.rank = "K";
            break;
          case 14:
            card.rank = "A";
            break;
        }
      }
    });
    console.log(cards[0], cards[1]);
    this.roundWin = "Player 2";
    this.player2.score += 1;
    console.log("p2 score", this.player2.score);
    // this.player2.hand.push(cards[0], cards[1]);
    console.log("\nP2 wins!", this.player2.hand);
  }
};

Game.prototype.deal = function () {
  // console.log('value of this', this)
  // ^^ Game {player1: Player, player2: Player, playDeck: Array(52)}
  // console.log('playDeck', this.playDeck)
  // console.log('players', this.player1.hand)
  for (let i = 0; i < this.playDeck.deck.length; i++) {
    if (i % 2) {
      this.player1.hand.push(this.playDeck.deck[i]);
    } else {
      this.player2.hand.push(this.playDeck.deck[i]);
    }
  }
  // console.log('P1', this.player1.hand, '\nP2', this.player2.hand)
  // ^^ displays array of 26 cards in each players hand
};

Game.prototype.shuffleDeck = function () {
  //using deck.length so you can use fresh deck or discard pile as deck
  //may need to use deck.deck to grab array
  //console.log('\nPreShuffle playdeck', this.playDeck.deck)
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
