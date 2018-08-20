import {combineReducers} from 'redux'

/**
 * @param {string} state 
 * @param {object} action
 */
const playerName = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_PLAYERNAME':
			return action.data
		default:
			return state
	}
}

/**
 * @param {object} state 
 * @param {object} action 
 */
const game = (state = {}, action ) => {
	switch (action.type) {
		case 'UPDATE_GAME':
			return action.data
		default:
			return state
	}
}

/**
 * @param {Array} state 
 * @param {object} action 
 */
const gameList = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_GAMELIST':
			return action.data
		default:
			return state
	}
}

const reducer = combineReducers({
	playerName,
	game,
	gameList
})

export default reducer