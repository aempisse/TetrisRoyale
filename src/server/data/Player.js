class Player {

    constructor(playerName, id) {
      this.playerName = playerName
      this.id = id
      this.score = 0
      this.gridStack = Array(22).fill(Array(10).fill(0))
    }
}

export default Player