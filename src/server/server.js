import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import cors from 'cors'
import gameManager from './data/game/gameManager'
import socketManager from './data/socketManager'
import createHandlers from './createHandlers'

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(cors())

io.on('connection', (socket) => createHandlers(socket, io, gameManager, socketManager))

server.listen(3000, (err) => {
    if (err) throw err
    console.log('listening on port 3000')
})
