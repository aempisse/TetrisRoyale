import tools from '../tools/tetriminoMoves'
import generatePermutedBag from '../tools/generatePermutedBag'

const initialState = {
	playerName: '',
	gameList: [],
	game: {},
	tetriminoes: [],
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

const reducerGenerateNewTetriminoes = (state, action) => {
	return {...state,
		tetriminoes: state.tetriminoes.concat(generatePermutedBag())
	}
}

const reducerMoveTetrimino = (state, action) => {
	if (state.tetriminoes.length === 0)
		return state
	if (tools.moveIsValid(action.data, state.tetriminoes[0], state.grid)) {
		let updatedTetriminoes = state.tetriminoes.map(tetrimino => ({...tetrimino}))
		updatedTetriminoes[0].position.x += action.data.x
		updatedTetriminoes[0].position.y += action.data.y
		return {...state,
			tetriminoes: updatedTetriminoes
		}
	}
	if (action.data.y)
		return {...state,
			tetriminoes: state.tetriminoes.slice(1),
			grid: tools.placeTetriminoIntoGrid(state.tetriminoes[0], state.grid)
		}
	return state
}

const reducerRotateTetrimino = (state, action) => {
	if (state.tetriminoes.length === 0 ||
		state.tetriminoes[0].type === 'O')
		return state
	const rotatedTetrimino = tools.rotate(state.tetriminoes[0], state.grid)
	if (rotatedTetrimino.rotation !== state.tetriminoes[0].rotation) {
		let updatedTetriminoes = state.tetriminoes.map(tetrimino => ({...tetrimino}))
		updatedTetriminoes[0] = rotatedTetrimino
		return {...state,
			tetriminoes: updatedTetriminoes
		}
	}
	return state
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
		case 'GENERATE_NEW_TETRIMINOES':
			return reducerGenerateNewTetriminoes(state, action)
		case 'MOVE_TETRIMINO':
			return reducerMoveTetrimino(state, action)
		case 'ROTATE_TETRIMINO':
			return reducerRotateTetrimino(state, action)
		case 'UPDATE_GRID':
			return reducerUpdateGrid(state, action)
		default:
			return state
	}
}

export default reducer
