const registerPlayer = (data) => {
    return {
        type: 'SERVER/REGISTER_PLAYER',
        data
    }
}

const getGames = (data) => {
    return {
        type: 'SERVER/GET_GAMES',
        data
    }
}

export default {
    // updatePlayerName,
    // updateGameList,
    registerPlayer,
    getGames
}