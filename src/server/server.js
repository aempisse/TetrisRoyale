import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import cors from 'cors'
import GameManager from './data/GameManager'
import SocketManager from './data/SocketManager'
import createHandlers from './createHandlers'

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(cors())

const socketManager = new SocketManager()
const gameManager = new GameManager()

io.on('connection', (socket) => createHandlers(socket, io, gameManager, socketManager))

server.listen(3000, (err) => {
    if (err) throw err
    console.log('listening on port 3000')
})
