import gameManager from './data/game/gameManager'
import socketManager from './data/socketManager'

export default (socket, io) => {
    socketManager.addSocket(socket)

    socket.on('SERVER/REGISTER_PLAYER', (data) => handleRegister(data, socket))
    socket.on('SERVER/GET_GAMES', (data) => handleGetGames(data, socket))
    socket.on('SERVER/CREATE_GAME', (data) => handleCreateGame(data, socket, io))

    // socket.on('disconnect', () => handleDisconnect(socket))
}


/**
 * @param {undefined} data
 * @param {object} socket
 */
const handleGetGames = (data, socket) => {
    const gameList = gameManager.getGameList()

    console.log('gameList requested')

    socket.emit('action', {
        type: 'UPDATE_GAMELIST',
        data: gameList
    })
}

/**
 * @param {string} data - playerName 
 * @param {object} socket
 */
const handleRegister = (data, socket) => {
    if (!data)
        return
    socketManager.registerSocket(socket, data)

    console.log('client registered:', data)
    
    socket.emit('action', {
        type: 'UPDATE_PLAYERNAME',
        data
    })
}

/**
 * @param {string} data - playerName
 * @param {socket} socket
 * @param {object} io
 */
const handleCreateGame = (data, socket, io) => {
    if (!data)
        return
    const newGame = gameManager.addGame()
    newGame.addPlayer(data, socket.id)
    socket.join(newGame.id)

    console.log('game created:', newGame.id)
    console.log('added player', data, 'to game', newGame.id)
    console.log(newGame)

    socket.emit('action', {
        type: 'JOIN_GAME',
        data: {
            inGame: true,
            playerName: data,
            game: newGame
        }
    })

    const gameList = gameManager.getGameList()
    console.log('new gameList', gameList)

    io.emit('action', {
        type: 'UPDATE_GAMELIST',
        data: gameList
    })
}

// const handleDisconnect = (socket) => {
//     gameManager.removePlayer(socket.id)
// }
