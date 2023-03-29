class Game {
    constructor() {
      this.player = null;
      this.computer = null;
      this.result = null;
      this.gameButton = document.querySelectorAll('.gamesbutton');
      this.compButton = document.querySelectorAll('.compbutton');
      this.resultDisplay = document.querySelector('#result');
      this.refreshButton = document.querySelector('#refresh');
      this.initialize();
    }
  
    initialize() {
      this.gameButton.forEach(button => {
        button.addEventListener('click', () => {
          this.player = button.id;
          this.playRound();
        });
      });
  
      this.refreshButton.addEventListener('click', () => {
        this.refreshGame();
      });
    }
  
    playRound() {
      this.computer = this.getComputerChoice();
      this.result = this.getResult();
      this.displayResult();
    }
  
    getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomNumber = Math.floor(Math.random() * 3)+1;
      return choices[randomNumber];
    }
  
    getResult() {
      if (this.player === 'rock') {
        if (this.computer === 'scissors') {
          return 'win';
        } 
        else if (this.computer === 'paper') {
          return 'lose';
        }
      } 
      else if (this.player === 'paper') {
        if (this.computer === 'rock') {
          return 'win';
        } 
        else if (this.computer === 'scissors') {
          return 'lose';
        }
      } 
      else if (this.player === 'scissors') {
        if (this.computer === 'paper') {
          return 'win';
        } 
        else if (this.computer === 'rock') {
          return 'lose';
        }
      }
      return 'draw';
    }
  
    displayResult() {
      this.gameButton.forEach(button => {
        button.disabled = true;
        if (button.id === this.player) {
          button.style.background = 'gray';
        }
      });
  
      this.compButton.forEach(button => {
        if (button.id === `comp${this.computer[0].toUpperCase() + this.computer.slice(1)}`) {
          button.style.background = 'gray';
        }
      });
  
      if (this.result === 'win') {
        this.resultDisplay.textContent = 'Player 1 Win!';
      } else if (this.result === 'draw') {
        this.resultDisplay.textContent = 'Draw';
      } else {
        this.resultDisplay.textContent = 'Comp Win!';
      }
    }
  
    refreshGame() {
      this.gameButton.forEach(button => {
        button.disabled = false;
        button.style.background = '';
      });
  
      this.compButton.forEach(button => {
        button.style.background = '';
      });
  
      this.player = null;
      this.computer = null;
      this.result = null;
      this.resultDisplay.textContent = 'VS';
    }
  }
  
  const game = new Game();