class Board {
  constructor(board = this._makeBoard()) {
    this.board = board
  }

  _makeBoard() {
    let board = new Array(3)

    for (var i = 0; i < board.length; i++) {
      board[i] = new Array(3)
    }
    return board
  }


  // ===========   Moves   ===========

  placeMarker (pos, marker) {
    if (this.inBounds(pos) && this.empty(pos)) {
      this.board[pos[0]][pos[1]] = marker
      return true
    }

    return false
  }

  // ===========   Validations   ===========
  empty (pos) {
    return this.board[pos[0]][pos[1]] === undefined
  }

  inBounds (pos) {
    let left = pos[0]
    let right = pos[1]

    if ((left > 2 || left < 0) || (right > 2 || right < 0)) {
      return false
    }

    return true
  }

  won () {

    // checks all rows
    if( this.board.some((row) => this.checkRow(row)))
    {
      return true;
    }
    else if (this.transpose().some((row) => this.checkRow(row)))
    {
      return true;
    }
    else if([this.rightDiagonal(), this.leftDiagonal()].some((row) => this.checkRow(row)))
    {
      return true;
    }
    else
    {
      return false
    }
  }

  checkRow (row) {
    return ['o','x'].some(function(shape) {
      return row.every(function (piece) {
        return piece === shape
      })
    })
  }

  // ===========   Visualization   ===========

  print () {
    console.log(JSON.stringify(this.board));
  }

  // ===========   Helpers   ===========

  transpose () {
    let transposeBoard = []

    for (var col = 0; col < this.board.length; col++) {
      let column = []
      for (var row = 0; row < this.board.length; row++) {
        column.push(this.board[row][col])
      }
      transposeBoard.push(column)
    }

    return transposeBoard
  }

  rightDiagonal () {
    return [this.board[0][0],this.board[1][1], this.board[2][2]]
  }

  leftDiagonal () {
    return [this.board[0][2],this.board[1][1], this.board[2][0]]
  }

}


module.exports = Board;
