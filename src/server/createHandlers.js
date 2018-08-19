export default (socket, io, gameManager, socketManager) => {
    socketManager.addSocket(socket)

    socket.on('SERVER/GET_GAMES',
        (data) => handleGetGames(data, socket, gameManager))
    socket.on('SERVER/REGISTER_PLAYER',
        (data) => handleRegister(data, socket, socketManager))
    socket.on('SERVER/CREATE_GAME',
        (data) => handleCreateGame(data, socket, io, gameManager))

    socket.on('disconnect',
        () => handleDisconnect(socket, io, socketManager, gameManager))
}

/**
 * @param {undefined} data
 * @param {object} socket
 */
const handleGetGames = (data, socket, gameManager) => {
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
const handleRegister = (data, socket, socketManager) => {
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
 * @param {object} socket
 * @param {object} io
 */
const handleCreateGame = (data, socket, io, gameManager) => {
    if (!data || !socket || !io)
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
    console.log(`new gameList: ${gameList}`)

    io.emit('action', {
        type: 'UPDATE_GAMELIST',
        data: gameList
    })
}

/**
 * @param {object} socket
 * @param {object} io
 */
const handleDisconnect = (socket, io, socketManager, gameManager) => {
    let game = null
    while (game = gameManager.getGameBySocket(socket)) {
        gameManager.removePlayerFromGame(socket, game)
    }
    if (game !== null) {
        const gameList = gameManager.getGameList()
        console.log(`new gameList: ${gameList}`)

        io.emit('action', {
            type: 'UPDATE_GAMELIST',
            data: gameList
        })
    }

    const playerName = socketManager.getPlayerNameBySocket(socket) || 'unnamed'
    socketManager.removeSocket(socket)
    console.log(`player ${playerName} (socket: ${socket.id}) disconnected`)

}
