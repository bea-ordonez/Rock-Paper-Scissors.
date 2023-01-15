
var human = new Player("Human", "👩🏻")
var computer = new Player("Computer", "💻")
var game = new Game

var playerPrompt = document.querySelector(".player-prompt")
var changeGameBtn = document.querySelector(".game-change-btn")
var classicGame = document.querySelector(".classic-box")
var difficultGame = document.querySelector(".difficult-box")
var selectionView = document.querySelector(".game-options-view")
var classicActions = document.querySelector("#classicActionsList")
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
var fighter1 = document.querySelector("#fighterOne")
var fighter2 = document.querySelector("#fighterTwo")

changeGameBtn.addEventListener('click', changeGame)
classicGame.addEventListener('click', loadClassicGameOptions)
difficultGame.addEventListener('click', loadDifficultGameOptions)
classicActions.addEventListener('click', function(event) {
    game.humanClassicSelection(event)
    game.computerActionSelection()
    game.playClassicGame(event)
    showWinnerOutcome(event, game.computerChoice)
    updatePrompt()
    updateScore()
    
})
difficultActions.addEventListener('click', function(event) {
    game.humanDifficultSelection(event)
    game.computerActionSelection()
    game.playDifficultGame(event)
    showWinnerOutcome(event, game.computerChoice)
    updatePrompt()
    updateScore()
})

function loadClassicGameOptions() {
    game.gameMode = "classic"
    selectionView.classList.add("hidden")
    classicActions.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
    battlePageView.classList.add("hidden")
    playerPrompt.innerText = "Choose your fighter!"
}

function loadDifficultGameOptions() {
    game.gameMode = "difficult"
    selectionView.classList.add("hidden")
    difficultActions.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
    battlePageView.classList.add("hidden")
    playerPrompt.innerText = "Choose your fighter!"
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
        playerPrompt.innerText = "👩🏻Human wins this round!👩🏻"
      }
      else if (game.winner === "computer"){
        playerPrompt.innerText = "💻Computer wins this round!💻"
      }
}

function showWinnerOutcome(event, name) {
        fighter1.src = event.target.src
        fighter2.src = getActionImgSrc(name)
        battlePageView.classList.remove("hidden")
        difficultActions.classList.add("hidden")
        classicActions.classList.add("hidden")
        resetGame()
}

function resetGame() {
    if(game.gameMode === "classic") {
        setTimeout(loadClassicGameOptions, 2000)
    } else if (game.gameMode === "difficult") {
        setTimeout(loadDifficultGameOptions, 2000)
    }
}

function getActionImgSrc(name) {
    if(name === "scissors") {
        return classicScissors.src
    } else if (name === "rock") {
        return classicRock.src
    } else if (name === "paper") {
        return classicPaper.src
    } else if (name === "difficultScissors") {
        return difficultScissors.src
    } else if (name === "difficultRock") {
        return difficultRock.src
    } else if (name === "difficultPaper") {
        return difficultPaper.src
    } else if (name === "love hands") {
        return loveHands.src
    } else if (name === "jazz hands") {
        return jazzHands.src
    }
}
