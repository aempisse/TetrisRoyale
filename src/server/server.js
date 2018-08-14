import express from 'express'
import http from 'http'
import IO from 'socket.io'

import socketManager from './socketManager'
import SocketHandler from './SocketHandler'

class Server {
    
    handleConnection(socket) {
        
        console.log('client connected...', socket.id)
        socketManager.addSocket(socket)

        const socketHandler = new SocketHandler(socket)

        socket.on('register', socketHandler.handleRegister)
    
        socket.on('createGame', socketHandler.handleCreateGame)

        socket.on('gameList', socketHandler.handleGameList)

        // client.on('join', handleJoin)
    
        // client.on('leave', handleLeave)
    
        socket.on('disconnect', function () {
            console.log('client disconnect...', socket.id)
            // handleDisconnect()
        })
    
        socket.on('error', function (err) {
            console.log('received error from client:', socket.id)
            console.log(err)
        })
    }

    start(port) {
        const app = express()
        const server = http.Server(app)
        const io = IO(server)

        io.on('connection', (socket) => this.handleConnection(socket))
        server.listen(port, function (err) {
            if (err) throw err
            console.log('listening on port 3000')
        })

    }

}

const server = new Server().start(3000)