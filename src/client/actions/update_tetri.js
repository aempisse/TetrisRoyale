import {UPDATE_TETRI} from '../constants/action_types.js';
import store from "../store/index.js";
import * as bitmap from "../constants/bitmap.js";
import {newTetriminos} from "../constants/TetriminosGenerator.js";
import {readMap} from "../constants/check_line.js";

export function updateTetri() {
	var newTetriminosState = store.getState().Tetriminos;
	var newGameState = store.getState().CaseState;
	var ColliBool = store.getState().CollisionBool;

	var col_tetri = newTetriminosState[0][1];
	var lgn_tetri = newTetriminosState[0][0] + 1;
	var type_tetri = newTetriminosState[1];
	var rot_tetri = newTetriminosState[2];

	if (lgn_tetri == 20)
	{
		ColliBool = 0;
		newGameState = bitmap.fillMap(newTetriminosState[0][0], newTetriminosState[0][1], newGameState, bitmap.Map(newTetriminosState[1], rot_tetri), 1);
		newGameState = bitmap.fillMap(lgn_tetri - 1, col_tetri, newGameState, bitmap.Map(type_tetri, rot_tetri), 2);
		newGameState = readMap(newGameState);
		newTetriminosState = newTetriminos();
	}
	else
	{
		newGameState = bitmap.fillMap(lgn_tetri - 1, col_tetri, newGameState, bitmap.Map(type_tetri, rot_tetri), 0);
		if (ColliBool == 1)
		{
			ColliBool = 0;
			newGameState = bitmap.fillMap(newTetriminosState[0][0], newTetriminosState[0][1], newGameState, bitmap.Map(newTetriminosState[1], rot_tetri), 1);
			newGameState = bitmap.fillMap(lgn_tetri - 1, col_tetri, newGameState, bitmap.Map(type_tetri, rot_tetri), 2);
			newGameState = readMap(newGameState);
			newTetriminosState = newTetriminos();
		}
		else
		{
			newTetriminosState[0] = [lgn_tetri, col_tetri];
			newGameState = bitmap.fillMap(lgn_tetri, col_tetri, newGameState, bitmap.Map(type_tetri, rot_tetri), 1);			
			ColliBool = bitmap.collisionHandler(lgn_tetri, col_tetri, newGameState, bitmap.Map(type_tetri, rot_tetri));
		}
	}

	return {
		type: UPDATE_TETRI,
		gamePayload: newGameState,
		tetriPayload: newTetriminosState,
		CollisionUpdate: ColliBool,
	}
};
