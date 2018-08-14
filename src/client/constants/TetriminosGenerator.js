import _ from "lodash";
import * as bitmap from "./bitmap.js";

export const newPosition = (tetriType) => {
	var Tetriminos = bitmap.Map(tetriType, 0);

	var i = 0;
	var j = 0;
	var limite = 0;

	while (i < 4)
	{
		while (j < 4 && Tetriminos[i][j] == 0)
		{
			j++;
		}
		if (Tetriminos[i][j] == 1)
			return (-i);
		j = 0;
		i++;
	}
	return (-i);
}

export const newTetriminos = () => {
	var tetriTabType = ["I", "L", "rL", "O", "N", "rN", "T"];
	var tetriType = tetriTabType[_.random(6)];

	var coord_tetri = [newPosition(tetriType), 4];
	var newTetriminosState = [coord_tetri, tetriType, 0];
	return (newTetriminosState);
}