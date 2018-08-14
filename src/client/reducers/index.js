import {CHANGE_COLOR, UPDATE_TETRI, TETRI_MOVE, UPDATE_INPUT_USERNAME, UPDATE_USERNAME, UPDATE_GAME_LIST, NEW_GAME_ROOM, EXIT_GAME_ROOM} from "../constants/action_types";
import {newTetriminos} from "../constants/TetriminosGenerator.js";

const initialState = {
	CaseState: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],],
	Tetriminos: newTetriminos(),
	CollisionBool: 0,
	inputUserName: "",
	userName: "Player",
	pageIndex: 0,
	ListGame: [],
};

const rootReducer = (state = initialState, action) => {
	//  console.log("payload dans le reducer : " + action.namePayload);
	switch (action.type) {
		case CHANGE_COLOR:
			return {...state, colors: action.payload};
		case UPDATE_TETRI:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload, CollisionBool: action.CollisionUpdate};
		case TETRI_MOVE:
			return {...state, Tetriminos: action.tetriPayload, CaseState: action.gamePayload};
		case UPDATE_INPUT_USERNAME:
			return {...state, inputUserName: action.namePayload};
		case UPDATE_USERNAME:
			return {...state, userName: action.namePayload, pageIndex: action.pageIndexPayload};
		case NEW_GAME_ROOM:
			return {...state, pageIndex: action.pageIndexPayload};
		case EXIT_GAME_ROOM:
			return {...state, pageIndex: action.pageIndexPayload};
		case UPDATE_GAME_LIST:
			return {...state, ListGame: action.gameListPayload};	
		default:
			return state;
	}
};

export default rootReducer;