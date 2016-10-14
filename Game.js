const Board = require('./Board.js');
const Player = require('./Player.js');


class Game {
  constructor() {
    this.board = new Board
    this.players = [new Player('Loren', 'x'), new Player('Alex', 'o')]
    this.currentPlayer = this.players[1]
  }

  takeTurn () {
    this.board.print()
    console.log(`${this.currentPlayer.name}: It is your turn`)

      while(this.currentPlayer.getMove((pos) => {
        if(this.board.placeMarker(pos, this.currentPlayer.marker)) {
          return true;
        }
        else {
          return false;
        }
      }){ }
    )

  }

  switchPlayers() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0]
  }

  play () {
    while (!this.board.won()) {
      this.switchPlayers();
      this.takeTurn();
    }

    return `${this.currentPlayer.name} is the winner!`
  }

}


let g = new Game
g.play()
