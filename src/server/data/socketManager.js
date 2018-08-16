class SocketManager {

    constructor() {
        this.sockets = new Map()
    }

    addSocket(socket) {
        this.sockets.set(socket.id, { socket })
    }

    registerSocket(socket, userName) {
        this.sockets.set(socket.id, { socket, userName })
    }

    removeSocket(socket) {
        this.sockets.delete(socket.id)
    }

    getSocketByUserName(userName) {
        return (this.sockets.find(socket => socket.userName === userName))
    }
}

const socketManager = new SocketManager()

export default socketManager