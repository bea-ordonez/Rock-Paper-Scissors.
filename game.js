class Game{
    constructor(gameData){
        this.players = [
            new Player('Human'),
            new Player('Computer')
        ]
        this.type = gameData.type
    }

}

//type classic/difficult
