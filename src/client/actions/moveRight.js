import {TETRI_MOVE} from '../constants/action_types.js';
import store from "../store/index.js";
import * as bitmap from "../constants/bitmap.js";


export function moveRight() {
	var newGameState = store.getState().CaseState;
	var newTetriminosState = store.getState().Tetriminos;
	var tetriMap = bitmap.Map(newTetriminosState[1], newTetriminosState[2]);

	if (bitmap.rightCollisionHandler(newTetriminosState, newGameState, tetriMap) == 1)
	{
		return {
			type: TETRI_MOVE,
			gamePayload: newGameState,
			tetriPayload: newTetriminosState,
		}
	}
	else
	{
		var lgn_tetri = newTetriminosState[0][0];
		var col_tetri = newTetriminosState[0][1];
		newTetriminosState[0][1] = col_tetri + 1;
		newGameState = bitmap.fillMap(lgn_tetri, col_tetri, newGameState, tetriMap, 0);
		newGameState = bitmap.fillMap(lgn_tetri, col_tetri + 1, newGameState, tetriMap, 1);
	
		return {
			type: TETRI_MOVE,
			gamePayload: newGameState,
			tetriPayload: newTetriminosState,
		}
	}
};