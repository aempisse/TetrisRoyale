class SocketManager {

    constructor() {
        this.sockets = new Map()
    }

    addSocket(socket) {
        this.sockets.set(socket.id, '')
    }

    registerSocket(socket, playerName) {
        this.sockets.set(socket.id, playerName)
    }

    removeSocket(socket) {
        this.sockets.delete(socket.id)
    }

    getSocketByPlayerName(playerName) {
        const entry = this.sockets.entries().find(pair => pair[1] === playerName)
        return entry[0]
    }

    getPlayerNameBySocket(socket) {
        return this.sockets.get(socket.id)
    }
}

export default SocketManager