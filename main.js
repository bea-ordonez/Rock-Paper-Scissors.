
var changeGameBtn = document.querySelector(".game-change-btn")
var classicGame = document.querySelector(".classic-box")
var difficultGame = document.querySelector(".difficult-box")
var selectionView = document.querySelector(".game-options-view")
var classicWeaponList = document.querySelector(".classic-weapon-list")
var difficultWeaponList = document.querySelector(".difficult-weapon-list")

classicGame.addEventListener('click', showClassicWeaponList)
difficultGame.addEventListener('click', showDifficultWeaponList)
changeGameBtn.addEventListener('click', changeGame)

function showClassicWeaponList() {
    selectionView.classList.add("hidden");
    classicWeaponList.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
}

function showDifficultWeaponList() {
    selectionView.classList.add("hidden");
    difficultWeaponList.classList.remove("hidden")
    changeGameBtn.classList.remove("hidden")
}

function changeGame() {
    selectionView.classList.remove("hidden");
    classicWeaponList.classList.add("hidden")
    difficultWeaponList.classList.add("hidden")
    changeGameBtn.classList.add("hidden")
}