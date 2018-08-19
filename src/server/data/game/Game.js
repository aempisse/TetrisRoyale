import Player from '../player/Player'

export default class Game {

	constructor(id) {
		this.id = id
		this.players = new Array()
	}

    addPlayer(playerName, id) {
        if (!playerName || !id)
            return undefined
        if (this.getPlayerById(id) === undefined) {
            const newPlayer = new Player(playerName, id)
            this.players.push(newPlayer)

            return newPlayer
        }
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

}
