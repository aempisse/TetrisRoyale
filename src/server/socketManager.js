class SocketManager {

    constructor() {
        this.io = undefined
        this.sockets = new Map()
    }

    addIO(io) {
        this.io = io
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