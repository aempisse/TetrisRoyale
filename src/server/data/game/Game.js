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

    getPlayerById(id) {
        return this.players.find(player => player.id === id)
    }

    // removePlayer(playerName) {
    //     const player = this.players.find(e => e.playerName === playerName)
    //     if (player) {
    //         this.players.delete(player)

    //         return player
    //     }
    // }

}
