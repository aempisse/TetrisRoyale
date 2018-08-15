import {combineReducers} from 'redux'

const playerName = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_PLAYERNAME':
			return action.playerName
		default:
			return state
	}
}

const gameList = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_GAME_LIST':
			return action.gameList
		default:
			return state
	}
}

const reducer = combineReducers({
	playerName,
	gameList
})

export default reducer