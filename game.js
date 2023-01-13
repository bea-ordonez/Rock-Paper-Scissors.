class Game{
    constructor(){
        this.humanChoice = undefined
        this.computerChoice = undefined
        this.players = 
        [
            new Player('Human'),
            new Player('Computer')
        ]
        this.gameMode = undefined
        this.winner = undefined
    }

    computerActionSelection() {
        if (this.gameMode === "classic") {
            var classicActions = ["rock", "paper", "scissors"]
            var randomAction = Math.floor(Math.random() * classicActions.length)
            this.computerChoice = classicActions[randomAction]
        } else if (this.gameMode === "difficult") {
            var difficultActions = ["rock", "paper", "scissors", "love hands", "jazz hands"]
            var randomAction = Math.floor(Math.random() * difficultActions.length)
            this.computerChoice = difficultActions[randomAction]
        }
    }

    humanClassicSelection(event) {
        if (event.target.id === "classicRock") {
            this.humanChoice = "rock" 
        }  else if (event.target.id === "classicPaper") {
            this.humanChoice = "paper"
        } else if (event.target.id === "classicScissors") {
            this.humanChoice = "scissors"
        }
    }
    
    humanDifficultSelection(event) {
        if (event.target.id === "difficultRock") {
            this.humanChoice = "rock"
        } else if (event.target.id === "difficultPaper") {
            this.humanChoice = "paper"
        } else if (event.target.id === "difficultScissors") {
            this.humanChoice = "scissors"
        } else if (event.target.id === "loveHands") {
            this.humanChoice = "love hands"
        } else if (event.target.id === "jazzHands") {
            this.humanChoice = "jazz hands"
        }
    }

    playClassicGame() {
        if(this.humanChoice === this.computerChoice) {
                 this.winner = "draw"
        } else if(this.humanChoice === "rock" && this.computerChoice === "scissors") {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if(this.humanChoice === "scissors" && this.computerChoice === "rock") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        } else if(this.humanChoice === "scissors" && this.computerChoice === "paper") {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if(this.humanChoice === "paper" && this.computerChoice === "scissors") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        } else if(this.humanChoice === "paper" && this.computerChoice === "rock") {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if(this.humanChoice === "rock" && this.computerChoice === "paper") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        }        
    }

    playDifficultGame() {
        if(this.humanChoice === this.computerChoice) {
                 this.winner = "draw"
        } else if(this.humanChoice === "rock" && (this.computerChoice === "scissors" || this.computerChoice === "love hands" )) {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if((this.humanChoice === "scissors" || this.humanChoice === "love hands") && this.computerChoice === "rock") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        } else if(this.humanChoice === "paper" && (this.computerChoice === "rock" || this.computerChoice === "jazz hands" )) {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if((this.humanChoice === "rock" || this.humanChoice === "jazz hands") && this.computerChoice === "paper") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        } else if(this.humanChoice === "scissors" && (this.computerChoice === "paper" || this.computerChoice === "love hands" )) {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if((this.humanChoice === "paper" || this.humanChoice === "love hands") && this.computerChoice === "scissors") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        } else if(this.humanChoice === "love hands" && (this.computerChoice === "paper" || this.computerChoice === "jazz hands" )) {
                 this.players[0].updateScore();
                 this.winner = "human"
        } else if((this.humanChoice === "paper" || this.humanChoice === "jazz hands") && this.computerChoice === "love hands") {
                 this.players[1].updateScore();
                 this.winner = "computer"
        }  else if(this.humanChoice === "jazz hands" && (this.computerChoice === "scissors" || this.computerChoice === "rock" )) {
                this.players[0].updateScore();
                this.winner = "human"
        } else if((this.humanChoice === "scissors" || this.humanChoice === "rock") && this.computerChoice === "jazz hands") {
                this.players[1].updateScore();
                this.winner = "computer"
        }        
    }

    
}

    

  
