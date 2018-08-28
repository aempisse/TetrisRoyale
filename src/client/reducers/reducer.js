import tools from '../tetrisTools'

const initialState = {
	playerName: '',
	gameList: [],
	game: {},
	currentPiece: {},
	grid: Array(22).fill(Array(10).fill(0)),
}

const reducerUpdatePlayerName = (state, action) => {
	return {...state, playerName: action.data}
}

const reducerUpdateGameList = (state, action) => {
	return {...state, gameList: action.data}
}

const reducerUpdateGame = (state, action) => {
	return {...state, game: action.data}
}

const reducerUpdateCurrentPiece = (state, action) => {
	return {...state, currentPiece: action.data}
}

const reducerMoveCurrentPiece = (state, action) => {
	return {...state, currentPiece: tools.movePiece(action.data, state.currentPiece, state.grid)}
}

const reducerUpdateGrid = (state, action) => {
	return {...state, grid: action.data}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_PLAYER_NAME':
			return reducerUpdatePlayerName(state, action)
		case 'UPDATE_GAME_LIST':
			return reducerUpdateGameList(state, action)
		case 'UPDATE_GAME':
			return reducerUpdateGame(state, action)
		case 'UPDATE_CURRENT_PIECE':
			return reducerUpdateCurrentPiece(state, action)
		case 'MOVE_CURRENT_PIECE':
			return reducerMoveCurrentPiece(state, action)
		case 'UPDATE_GRID':
			return reducerUpdateGrid(state, action)
		default:
			return state
	}
}

export default reducer