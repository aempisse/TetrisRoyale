import Game from './Game'

class GameManager {
	
	constructor() {
		this.games = new Array()
	}

	addGame() {
		let newGameId
		do {
			newGameId = (Math.floor(Math.random() * 9999) + 1).toString().padStart(4, '0')
			console.log(newGameId)
		}
		while (this.getGame(newGameId) !== undefined)

		const newGame = new Game(newGameId)
		this.games.push(newGame)
		return newGame
	}

	getGame(id) {
		return this.games.find(game => game.id === id)
	}

	getGameList() {
		return this.games
	}

}

const gameManager = new GameManager()

export default gameManager