
/**
 * @param {Array} data - gameList
 */
const updateGameList = data => {
    return {
        type: 'UPDATE_GAME_LIST',
        data
    }
}

/**
 * @param {string} data - playerName
 */
const updatePlayerName = data => {
    return {
        type: 'UPDATE_PLAYER_NAME',
        data
    }
}

/**
 * @param {object} data - new piece
 */
const updateCurrentPiece = data => {
    return {
        type: 'UPDATE_CURRENT_PIECE',
        data
    }
}

const generateNewTetriminoes = data => {
    return {
        type: 'GENERATE_NEW_TETRIMINOES',
        data
    }
}

/**
 * @param {object} data - move {x, y}
 */
const moveCurrentPiece = data => {
    return {
        type: 'MOVE_CURRENT_PIECE',
        data
    }
}

/**
 * @param {undefined} data
 */
const rotateCurrentPiece = data => {
    return {
        type: 'ROTATE_CURRENT_PIECE',
        data
    }
}

/**
 * @param {object} data - game
 */
const updateGame = data => {
    return {
        type: 'UPDATE_GAME',
        data
    }
}

/**
 * @param {Array} data - grid
 */
const updateGrid = data => {
    return {
        type: 'UPDATE_GRID',
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
    return {
        type: 'SERVER/CREATE_GAME',
        data
    }
}

/**
 * @param {string} data.playerName - playerName
 * @param {string} data.gameId - gameId
 */
const joinGame = data => {
    return {
        type: 'SERVER/JOIN_GAME',
        data
    }
}

/**
 * @param {string} data.playerName - playerName
 * @param {string} data.gameId - gameId
 */
const quitGame = data => {
    return {
        type: 'SERVER/QUIT_GAME',
        data
    }
}

/**
 * @param {undefined} data
 */
const getGameList = data => {
    return {
        type: 'SERVER/GET_GAMELIST',
        data
    }
}

// /**
//  * @param {undefined} data
//  */
// const getNewPiece = data => {
//     return {
//         type: 'SERVER/GET_NEWPIECE',
//         data
//     }
// }

/**
 * @param {array} data - updatedGrid
 */
const anchorPiece = data => {
    return {
        type: 'SERVER/ANCHOR_PIECE',
        data
    }
}

export default {
    updateGameList,
    updatePlayerName,
    updateCurrentPiece, // change flow management ?
    generateNewTetriminoes,
    moveCurrentPiece,
    updateCurrentPiece,
    updateGame,
    updateGrid,
    registerPlayer, // remove ?
    createGame,
    joinGame,
    quitGame,
    getGameList,
    // getNewPiece,
    anchorPiece
}
