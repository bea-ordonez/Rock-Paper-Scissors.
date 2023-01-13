class Game{
    constructor(player1, player2){
        this.humanChoice = ""
        this.computerChoice = ""
        this.players = 
        [
            new Player('Human'),
            new Player('Computer')
        ]
        this.gameMode = ""
    }

    selectGameMode(mode) {
        if(mode === "classic") {
            this.gameMode = "classic"
        } else if (mode === "difficult") {
            this.gameMode = "difficult"
        }
    }

    playClassicMode() {
        var result = ""
        if(this.humanChoice === this.computerChoice) {
            result = "draw"
        } else if (this.humanChoice === "rock" && this.computerChoice === "scissors") {
                  this.players[0].updateScore();
                   result = "human"
        } else if(this.humanChoice === "scissors" && this.computerChoice === "rock") {
                  this.players[1].updateScore();
                  result = "computer"
        } else if(this.humanChoice === "scissors" && this.computerChoice === "paper") {
                   this.players[0].updateScore();
                   result = "human"
        } else if(this.humanChoice === "paper" && this.computerChoice === "scissors") {
                   this.players[1].updateScore();
                   result = "computer"
        } else if(this.humanChoice === "paper" && this.computerChoice === "rock") {
                   this.players[0].updateScore();
                   result = "human"
        } else if(this.humanChoice === "rock" && this.computerChoice === "paper") {
                 this.players[1].updateScore();
                 result = "computer"
        }
                 return result;
                 
    }

    
}

    

    // playDifficultMode() {

    // }


//type classic/difficult
