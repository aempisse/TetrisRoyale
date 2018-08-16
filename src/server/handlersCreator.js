import gameManager from './data/game/gameManager'

export default (socket, socketManager) => {

    const handleRegister = (userName) => {
		socketManager.registerSocket(socket, userName)
		console.log('client registered:', userName)
		
        socket.emit('registerResponse', userName)
	}

	const handleGameList = () => {
		const gameList = gameManager.getGameList()
        console.log('gameList requested')

        socket.emit('gameListResponse', gameList)
	}

	const handleCreateGame = (name) => {
		const newGame = gameManager.addGame()
		newGame.addPlayer(name, socket.id)

        socket.join(newGame.id)
        socket.broadcast.emit('gameListResponse', gameManager.getGameList())

		console.log('game created:', newGame.id)
		console.log('added player', name, 'to game', newGame.id)

        socket.emit('newGameResponse', newGame)
    }
    
    return {
        handleRegister,
        handleGameList,
        handleCreateGame
    }
}