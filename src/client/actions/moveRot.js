import {TETRI_MOVE} from '../constants/action_types.js';
import store from "../store/index.js";
import * as bitmap from "../constants/bitmap.js";


export function moveRot() {
	var newGameState = store.getState().CaseState;
	var newTetriminosState = store.getState().Tetriminos;
	var rot_tetri = newTetriminosState[2];
	var tetriMap = bitmap.Map(newTetriminosState[1], rot_tetri);

	if (bitmap.rotationHandler(newTetriminosState[0], newGameState, newTetriminosState[1],newTetriminosState[2]) == 1)
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

		newGameState = bitmap.fillMap(lgn_tetri, col_tetri, newGameState, tetriMap, 0);

		if (rot_tetri == 3)
			rot_tetri = 0;
		else
			rot_tetri++;
		tetriMap = bitmap.Map(newTetriminosState[1], rot_tetri);
		newTetriminosState[2] = rot_tetri;
		newGameState = bitmap.fillMap(lgn_tetri, col_tetri, newGameState, tetriMap, 1);
		return {
			type: TETRI_MOVE,
			gamePayload: newGameState,
			tetriPayload: newTetriminosState,
		}
	}
};