const updatePlayerName = (playerName) => {
    return {
        type: 'UPDATE_PLAYERNAME',
        playerName: playerName
    }
}

const updateGameList = (gameList) => {
    return {
        type: 'UPDATE_GAME_LIST',
        gameList: gameList
    }
}

export default {
    updatePlayerName,
    updateGameList
}