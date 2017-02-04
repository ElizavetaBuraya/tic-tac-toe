class TicTacToe {
    constructor() {
      this.field = [];
      this.currentPlayer = 'x';
      this.currentSymbol = null;

      for(var i = 0; i < 3; i++)
      {
        this.field[i] = [];

        for(var j = 0; j < 3; j++)
        {
          this.field[i][j] = null;
        }
      }
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null)
      {
        this.field[rowIndex][columnIndex] = this.currentPlayer;
        this.currentSymbol = this.currentPlayer;

        if (this.currentPlayer == 'x')
        {
          this.currentPlayer = 'o';
        }
        else if (this.currentPlayer == 'o')
        {
          this.currentPlayer = 'x';
        }
      }
    }

    isFinished() {
      if (this.getWinner() != null || this.isDraw() == true)
      {
        return true;
      }
      else
         return false;
    }

    getWinner() {
      //to be rewritten...
      if (
        (this.field[0][0] == this.field[0][1] &&
        this.field[0][0] == this.field[0][2] &&
        this.field[0][0] != null ) ||
        (this.field[1][0] == this.field[1][1] &&
          this.field[1][0] == this.field[1][2] &&
          this.field[1][0] != null) ||
        (this.field[2][0] == this.field[2][1] &&
          this.field[2][0] == this.field[2][2] &&
          this.field[2][0] != null) ||
        (this.field[0][0] == this.field[1][0] &&
          this.field[0][0] == this.field[2][0] &&
          this.field[0][0] != null) ||
        (this.field[0][1] == this.field[1][1] &&
           this.field[0][1] == this.field[2][1] &&
           this.field[0][1] != null) ||
        (this.field[0][2] == this.field[1][2] &&
          this.field[0][2] == this.field[2][2] &&
          this.field[0][2] != null) ||
        (this.field[0][0] == this.field[1][1] &&
          this.field[0][0] == this.field[2][2] &&
          this.field[0][0] != null) ||
        (this.field[0][2] == this.field[1][1] &&
          this.field[0][2] == this.field[2][0] &&
          this.field[0][2] != null)
      )
      {
          return this.currentSymbol;
      }
      else
        return null;
    }

    noMoreTurns() {
      var check = true;

      for (var i = 0; i < 3; i++)
      {
        for (var j = 0; j < 3; j++)
        {
          if (this.field[i][j] == null)
          {
            check = false;
          }
        }
      }
      return check;
    }

    isDraw() {
      if (this.noMoreTurns() == true && this.getWinner() == null)
      {
        return true;
      }
      else
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
