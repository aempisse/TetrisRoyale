import action from '../client/actions/actionsCreator'

export default (socket, io, gameManager, socketManager) => {
    socketManager.addSocket(socket)

    socket.on('SERVER/GET_GAMES',
        data => handleGetGames(data, socket, gameManager))
    socket.on('SERVER/REGISTER_PLAYER',
        data => handleRegister(data, socket, socketManager))
    socket.on('SERVER/CREATE_GAME',
        data => handleCreateGame(data, socket, io, gameManager))
    socket.on('SERVER/JOIN_GAME',
        data => handleJoinGame(data, socket, io, gameManager))
    socket.on('SERVER/QUIT_GAME',
        data => handleQuitGame(data, socket, io, gameManager))

    socket.on('disconnect',
        () => handleDisconnect(socket, io, socketManager, gameManager))
}

/**
 * @param {undefined} data
 */
const handleGetGames = (data, socket, gameManager) => {
    const gameList = gameManager.getGameList()

    console.log('gameList requested')

    socket.emit('action', action.updateGameList(gameList))
}

/**
 * @param {string} data - playerName
 */
const handleRegister = (data, socket, socketManager) => {
    if (!data)
        return
    socketManager.registerSocket(socket, data)

    console.log('client registered:', data)

    socket.emit('action', action.updatePlayerName(data))
}

/**
 * @param {string} data - playerName
 */
const handleCreateGame = (data, socket, io, gameManager) => {
    if (!data || !socket || !io)
        return

    const newGame = gameManager.addGame()
    newGame.addPlayer(data, socket.id)
    socket.join(newGame.id)

    socket.emit('action', action.updateGame(newGame))
    io.emit('action', action.updateGameList(gameManager.getGameList()))
}

/**
 * @param {string} data.playerName - playerName
 * @param {string} data.gameId - gameId
 */
const handleJoinGame = (data, socket, io, gameManager) => {
    if (!data || !data.playerName || !data.gameId || !socket || !io)
        return

    const game = gameManager.getGame(data.gameId)
    if (game === undefined)
        return

    game.addPlayer(data.playerName, socket.id)
    socket.join(game.id)

    io.in(game.id).emit('action', action.updateGame(game))
    io.emit('action', action.updateGameList(gameManager.getGameList()))
}

const handleQuitGame = (data, socket, io, gameManager) => {
    if (!data || !socket || !io || !gameManager)
        return

    const game = gameManager.getGame(data.gameId)
    if (game === undefined)
        return

    gameManager.removePlayerFromGame(socket, game)
    socket.leave(game.id)

    socket.emit('action', action.updateGame({}))
    io.in(game.id).emit('action', action.updateGame(gameManager.getGame(data.gameId)))
    io.emit('action', action.updateGameList(gameManager.getGameList()))
}

/**
 */
const handleDisconnect = (socket, io, socketManager, gameManager) => {
    let game = null
    while (game = gameManager.getGameBySocket(socket)) {
        gameManager.removePlayerFromGame(socket, game)
        io.in(game.id).emit('action', action.updateGame(gameManager.getGame(data.gameId)))
    }
    if (game !== null) {
        io.emit('action', action.updateGameList(gameManager.getGameList()))
    }

    const playerName = socketManager.getPlayerNameBySocket(socket) || 'unnamed'
    socketManager.removeSocket(socket)
    console.log(`player ${playerName} (socket: ${socket.id}) disconnected`)
}
