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

	removeGame(id) {
		if (!id || this.games.length === 0)
			return

		const remainingGames = this.games.filter(game => game.id !== id)
		this.games = remainingGames
	}

	removePlayerFromGame(socket, game) {
		if (!socket || !game || this.getGame(game.id) === undefined)
			return

		this.getGame(game.id).removePlayer(socket.id)
		if (this.getGame(game.id).players.length === 0)
			this.removeGame(game.id)
	}

	getGame(id) {
		if (!id)
			return undefined
			
		return this.games.find(game => game.id === id)
	}

	getGameBySocket(socket) {
		if (!socket)
			return undefined

		return this.games.find(game => 
			game.players.find(player => 
				player.id === socket.id
			)
		)
	}

	getGameList() {
		return this.games
	}

}

const gameManager = new GameManager()

export default gameManager