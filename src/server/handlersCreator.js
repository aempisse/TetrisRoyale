import gameManager from './data/game/gameManager'
import socketManager from './data/socketManager'

export default (socket) => {
    socketManager.addSocket(socket)

    socket.on('REGISTER_PLAYER', (data) => handleRegister(data, socket))
    socket.on('GET_GAMES', (data) => handleGetGames(data, socket))
}

const handleGetGames = (data, socket) => {
    const gameList = gameManager.getGameList()
    console.log('gameList requested')

    socket.emit('action', {
        type: 'UPDATE_GAMELIST',
        data: gameList
    })
}

const handleRegister = (data, socket) => {
    socketManager.registerSocket(socket, data)
    console.log('client registered:', data)
    
    socket.emit('action', {
        type: 'UPDATE_PLAYERNAME',
        data
    })
}

// const handleCreateGame = (name) => {
//     const newGame = gameManager.addGame()
//     newGame.addPlayer(name, socket.id)

//     socket.join(newGame.id)
//     socket.broadcast.emit('gameListResponse', gameManager.getGameList())

//     console.log('game created:', newGame.id)
//     console.log('added player', name, 'to game', newGame.id)

//     socket.emit('newGameResponse', newGame)
// }

