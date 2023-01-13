
var playerPrompt = document.querySelector(".player-prompt")
var changeGameBtn = document.querySelector(".game-change-btn")
var classicGame = document.querySelector(".classic-box")
var difficultGame = document.querySelector(".difficult-box")
var selectionView = document.querySelector(".game-options-view")
var classicActions = document.querySelector(".classic-action-list")
var classicBattle = document.querySelector("#classicBattleSection")
var difficultActions = document.querySelector(".difficult-action-list")
var battlePageView = document.querySelector(".battle-page")

var classicRock = document.querySelector(".classic-rock")
var classicPaper = document.querySelector(".classic-paper")
var classicScissors = document.querySelector(".classic-scissors")

var difficultRock = document.querySelector(".classic-rock")
var difficultPaper = document.querySelector(".classic-paper")
var difficultScissors = document.querySelector(".classic-scissors")
var loveHands = document.querySelector(".love-hands")
var jazzHands = document.querySelector(".jazz-hands")
var difficultBattle = document.querySelector("#difficultBattleSection");

// var human = new Player("Human")
// var computer = new Player("Computer")
// var game = new Game(human, computer)



changeGameBtn.addEventListener('click', changeGame)

classicGame.addEventListener('click', loadClassicGameOptions)

difficultGame.addEventListener('click', loadDifficultGameOptions)

classicRock.addEventListener('click', loadBattlePage)

function loadClassicGameOptions() {
    selectionView.classList.add("hidden");
    classicActions.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
}

function loadDifficultGameOptions() {
    selectionView.classList.add("hidden");
    difficultActions.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
}

function changeGame() {
    selectionView.classList.remove("hidden");
    classicActions.classList.add("hidden")
    difficultActions.classList.add("hidden")
    changeGameBtn.classList.add("hidden")
}

function loadBattlePage() {
    playerPrompt.classList.add("hidden")
    classicActions.classList.add("hidden")
    battlePageView.classList.remove("hidden")
    
}