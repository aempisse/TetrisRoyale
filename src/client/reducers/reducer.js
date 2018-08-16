import {combineReducers} from 'redux'

const playerName = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_PLAYERNAME':
			return action.data
		default:
			return state
	}
}

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
	gameList
})

export default reducer