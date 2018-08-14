import Player from '../player/Player'

export default class Game {

    constructor(id) {
      this.id = id
      this.players = new Map()
    }

  addPlayer(playerName, id) {
    if (!playerName || !id)
      return undefined
    if (!this.containPlayer(playerName) && !this.containId(id)) {
      const player = new Player(playerName, id)
      this.players.push(player)

    // io.to(this.id).emit('playerJoined', playerName)

    return player;
    }
  }

  removePlayer(playerName) {
    const player = this.players.find(e => e.playerName === playerName)
    if (player) {
      this.players.delete(player)

    //   PacketSender.sendPlayerQuit(player, this)

      return player
    }
  }

  getPlayer(id) {
    return this.players.find(e => e.id === id);
  }

  containId(id) {
    return this.players.find(e => e.id === id) !== undefined;
  }

  containPlayer(playerName) {
    return this.players.find(e => e.playerName === playerName) !== undefined;
  }

}
