import io from 'socket.io-client'
import response from './serverResponseHandler'

const socket = io.connect('http://localhost:3000')

const register = (playerName) => {
  socket.emit('register', playerName)
}

const newGame = (playerName) => {
  socket.emit('newGame', playerName)
}

const gameList = () => {
  socket.emit('gameList')
}

const join = (chatroomName) => {
  socket.emit('join', chatroomName)
}

const leave = (chatroomName) => {
  socket.emit('leave', chatroomName)
}

socket.on('error', function (err) {
  console.log('received socket error:')
  console.log(err)
})

socket.on('registerResponse', response.register)
socket.on('gameListResponse', response.gameList)
socket.on('newGameResponse', response.newGame)

export {
  register,
  newGame,
  gameList,
  join,
  leave,
}
