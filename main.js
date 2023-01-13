
var human = new Player("Human", "👩🏻")
var computer = new Player("Computer", "💻")
var game = new Game

var playerPrompt = document.querySelector(".player-prompt")
var changeGameBtn = document.querySelector(".game-change-btn")
var classicGame = document.querySelector(".classic-box")
var difficultGame = document.querySelector(".difficult-box")
var selectionView = document.querySelector(".game-options-view")

var classicActions = document.querySelector("#classicActionsList")

var classicBattle = document.querySelector("#classicBattleSection")
var difficultActions = document.querySelector("#difficultActionList")

var battlePageView = document.querySelector(".battle-page-view")

var humanScore = document.querySelector("#humanCounter")
var computerScore = document.querySelector("#computerCounter")

var classicRock = document.querySelector(".classic-rock")
var classicPaper = document.querySelector(".classic-paper")
var classicScissors = document.querySelector(".classic-scissors")

var difficultRock = document.querySelector(".classic-rock")
var difficultPaper = document.querySelector(".classic-paper")
var difficultScissors = document.querySelector(".classic-scissors")
var loveHands = document.querySelector(".love-hands")
var jazzHands = document.querySelector(".jazz-hands")

var difficultBattle = document.querySelector("#difficultBattleSection")






changeGameBtn.addEventListener('click', changeGame)
classicGame.addEventListener('click', loadClassicGameOptions)
difficultGame.addEventListener('click', loadDifficultGameOptions)
classicActions.addEventListener('click', function() {
    game.humanClassicSelection(event)
    game.computerActionSelection()
    game.playClassicGame(event)
    updatePrompt()
    updateScore()
    
})
difficultActions.addEventListener('click', function() {
    game.humanDifficultSelection(event)
    game.computerActionSelection()
    game.playDifficultGame(event)
    updatePrompt()
    updateScore()
})




function loadClassicGameOptions() {
    game.gameMode = "classic"
    selectionView.classList.add("hidden")
    classicActions.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
}

function loadDifficultGameOptions() {
    game.gameMode = "difficult"
    selectionView.classList.add("hidden")
    difficultActions.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
}

function changeGame() {
    selectionView.classList.remove("hidden")
    classicActions.classList.add("hidden")
    difficultActions.classList.add("hidden")
    changeGameBtn.classList.add("hidden")
}

function updateScore() {
    humanScore.innerText = game.players[0].score
    computerScore.innerText = game.players[1].score
}

function updatePrompt() {
    if(game.winner === "draw"){
        playerPrompt.innerText = "It's a draw!"
      }
      else if (game.winner === "human"){
        playerPrompt.innerText = "Human wins this round!"
      }
      else if (game.winner === "computer"){
        playerPrompt.innerText = "Computer wins this round!"
      }
}

// function loadFightPage() {
//     classicActions.classList.add("hidden")
//     difficultActions.classList.add("hidden")
//     battlePageView.classList.remove("hidden")


//     if(game.winner === "draw"){
//         playerPrompt.innerText = "It's a draw!";
//       }
//       else if (result === "human"){
//         playerPrompt.innerText = "Human wins this round!";
//       }
//       else if (result === "computer"){
//         playerPrompt.innerText = "Computer wins this round!";
//       }




//     game.selectGameMode("classic")



  
        


    
// }

