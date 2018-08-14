import socketManager from './socketManager'
import gameManager from './data/game/gameManager'

export default class SocketHandler {
    constructor (socket) {
        this.socket = socket
        this.id = socket.id
    }

    handleRegister(userName) {
		socketManager.registerSocket(this.socket, userName)
		console.log('client register:', userName)

		this.registerResponse(userName)
	}

	handleGameList() {
		const gameList = gameManager.getGameList()

		this.gameListResponse(gameList)
	}

	handleCreateGame(name) {
		const newGame = gameManager.addGame()
		newGame.addPlayer(name, socket.id)

        this.socket.join(newGame.id)
        this.socket.broadcast.emit('gameListResponse', gameManager.getGameList())

		console.log('game created:', newGame.id)
		console.log('added player', name, 'to game', newGame.id)

		this.newGameResponse(newGame)
	}

    registerResponse(userName) {
        this.socket.emit('registerResponse', userName)
    }

    gameListResponse(gameList) {
        this.socket.emit('gameListResponse', gameList)
    }

    newGameResponse(newGame) {
        this.socket.emit('newGameResponse', newGame)
    }
}