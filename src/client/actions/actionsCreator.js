
/**
 * @param {Array} data - gameList
 */
const updateGamelist = data => {
    return {
        type: 'UPDATE_GAMELIST',
        data
    }
}

const updatePlayername = data => {
    return {
        type: 'UPDATE_PLAYERNAME',
        data
    }
}

/**
 * @param {string} data - playerName
 */
const registerPlayer = data => {
    return {
        type: 'SERVER/REGISTER_PLAYER',
        data
    }
}

/**
 * @param {string} data - playerName
 */
const createGame = data => {
    // data: playerName
    return {
        type: 'SERVER/CREATE_GAME',
        data
    }
}

/**
 * @param {undefined} data
 */
const getGames = data => {
    return {
        type: 'SERVER/GET_GAMES',
        data
    }
}

export default {
    updateGamelist,
    registerPlayer,
    createGame,
    getGames
}