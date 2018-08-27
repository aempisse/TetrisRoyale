import Player from './Player'
import PieceGenerator from './PieceGenerator'

class Game {

	constructor(id) {
        this.id = id
        this.started = false
        this.players = new Array()
        this.pieceGenerator = new PieceGenerator()
	}

    addPlayer(playerName, id) {
        if (!playerName || !id || this.getPlayerById(id) !== undefined)
            return undefined

        const newPlayer = new Player(playerName, id)
        this.players.push(newPlayer)

        return newPlayer
    }

    removePlayer(id) {
        if (!id || this.players.length === 0)
            return

        const remainingPlayers = this.players.filter(player => player.id !== id)
        this.players = remainingPlayers
    }

    getPlayerById(id) {
        if (!id)
            return undefined
            
        return this.players.find(player => player.id === id)
    }

    generatePieceForPlayer(id) {
        const player = this.getPlayerById(id)
        const piece = this.pieceGenerator.generatePiece(player.pieceIndex++)
        return piece
    }

}

export default Game