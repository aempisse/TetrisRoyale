import express from 'express'
import http from 'http'
// import path from 'path'
import IO from 'socket.io'

import socketManager from './data/socketManager'
import makeHandlers from './handlersCreator'

class Server {

    handleConnection(socket) {

        console.log('client connected...', socket.id)
        socketManager.addSocket(socket)

        const {
            handleRegister,
            handleGameList,
            handleCreateGame
        } = makeHandlers(socket, socketManager)

        socket.on('register', handleRegister)
        socket.on('gameList', handleGameList)
        socket.on('createGame', handleCreateGame)
        // socket.on('join', handleJoin)
        // socket.on('leave', handleLeave)

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
		// app.get('/*', (req, res) => {
		// 	res.sendFile(path.join(__dirname, '../client/index.html'))
		//   })
        server.listen(port, function (err) {
            if (err) throw err
            console.log('listening on port 3000')
        })

    }

}

const server = new Server().start(3000)