import _ from "lodash";

export const Map = (type, rot) => {
	if (type === "I")
	{
		if (rot == 0)
		{
			return (
			   [[0, 0, 0, 0],
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 1)
		{
			return (
			   [[0, 1, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 0, 0],]
			)
		}
		else if (rot == 2)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 1, 1, 1],
				[0, 0, 0, 0],]
			)
		}
		else
		{
			return (
			   [[0, 0, 1, 0],
				[0, 0, 1, 0],
				[0, 0, 1, 0],
				[0, 0, 1, 0],]
			)
		}
	}
	if (type === "L")
	{
		if (rot == 0)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 0, 0, 1],
				[0, 1, 1, 1],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 1)
		{
			return (
			   [[0, 1, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 2)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 1, 1],
				[0, 1, 0, 0],
				[0, 0, 0, 0],]
			)
		}
		else
		{
			return (
			   [[0, 1, 1, 0],
				[0, 0, 1, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 0],]
			)
		}
	}
	if (type === "rL")
	{
		if (rot == 0)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 1, 1],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 1)
		{
			return (
			   [[0, 1, 1, 0],
				[0, 1, 0, 0],
				[0, 1, 0, 0],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 2)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 1, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 0],]
			)
		}
		else
		{
			return (
			   [[0, 0, 1, 0],
				[0, 0, 1, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],]
			)
		}
	}
	if (type === "O")
	{
		return (
		   [[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],]
		)
	}
	if (type === "N")
	{
		if (rot == 0)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 1, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 1)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 1, 0],]
			)
		}
		else if (rot == 2)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 1, 0],
				[1, 1, 0, 0],]
			)
		}
		else if (rot == 3)
		{
			return (
			   [[0, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 1, 0, 0],
				[0, 1, 0, 0],]
			)
		}
	}
	if (type === "rN")
	{
		if (rot == 0)
		{
			return (
			   [[0, 0, 0, 0],
				[1, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 1)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 0, 1, 0],
				[0, 1, 1, 0],
				[0, 1, 0, 0],]
			)
		}
		else if (rot == 2)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 1, 0, 0],
				[0, 1, 1, 0],]
			)
		}
		else if (rot == 3)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 0, 0],
				[1, 1, 0, 0],
				[1, 0, 0, 0],]
			)
		}
	}
	if (type === "T")
	{
		if (rot == 0)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],]
			)
		}
		else if (rot == 1)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 1, 0, 0],]
			)
		}
		else if (rot == 2)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 0, 0, 0],
				[1, 1, 1, 0],
				[0, 1, 0, 0],]
			)
		}
		else if (rot == 3)
		{
			return (
			   [[0, 0, 0, 0],
				[0, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 1, 0, 0],]
			)
		}
	}
}

export const checkIfOutside = (tetriMap, tetri_pos) => {
	var i = 0;
	var j = 0;
	while (i < 4)
	{
		while (j < 4)
		{
			if (tetriMap[i][j] == 1)
			{
				if (tetri_pos[1] + j < 0 || tetri_pos[1] + j > 9)
					return (1);
			}
			j++;
		}
		j = 0;
		i++;
	}
	return (0);
}

export const rotationHandler = (tetri_pos, gameMap, tetri_type, rot_tetri) => {
	if (rot_tetri == 3)
		rot_tetri = 0;
	else
		rot_tetri++;

	var i = 0;
	var j = 0;
	var tetri_tmp = Map(tetri_type, rot_tetri);
	while (i < 4)
	{
		while (j < 4)
		{
			if (gameMap[tetri_pos[0] + i][tetri_pos[1] + j] == 2 && tetri_tmp[i][j] == 1)
				return (1);
			j++;
		}
		j = 0;
		i++;
	}
	if (checkIfOutside(tetri_tmp, tetri_pos) == 1)
		return (1);
	return (0);
}

export const reachMapLimite = (tetri_pos, tetriMap, incr_type) => {
	var i = 0;
	var j;
	var limite;
	if (incr_type == 0)
	{
		limite = [0, 3];
		while (i < 3)
		{
			j = 0;
			while (j < 3)
			{
				if (tetriMap[i][j] == 1 && limite[1] > j)
					{
						limite = [i, j];
						if (tetri_pos[1] - 1 < 0 - j)
							return ([1, limite]);
					}
				j++;
			}
			j = 0;
			i++;
		}
	}
	else
	{
		limite = [0, 0]
		while (i < 3)
		{
			j = 3;
			while (j > 0)
			{
				if (tetriMap[i][j] == 1 && limite[1] < j)
				{
					limite = [i, j];
					if (tetri_pos[1] + 1 > 9 - j)
						return([1, limite]);
				}
				j--;
			}
			j = 3;
			i++;
		}
	}
	return ([0, limite]);
}

export const searchCollision = (tetri_pos, gameMap, tetriMap, incr_type) => {
	var i = 0;
	var j;
	
	if (incr_type == 0)
	{
		while (i < 3)
		{
			j = 0;
			while (j < 3)
			{
				if (tetriMap[i][j] == 1 && gameMap[tetri_pos[0] + i][tetri_pos[1] + j - 1] == 2)
					return (1);
				j++;
			}
			j = 0;
			i++;
		}
	}	
	else
	{
		while (i < 3)
		{
			j = 3;
			while (j > 0)
			{
				if (tetriMap[i][j] == 1 && gameMap[tetri_pos[0] + i][tetri_pos[1] + j + 1] == 2)
					return (1);
				j--;
			}
			j = 3;
			i++;
		}
	}
}

export const leftCollisionHandler = (tetriminos, gameMap, tetriMap) => {
	var limite = reachMapLimite(tetriminos[0], tetriMap, 0);
	if (limite[0] == 1)
		return (1);
	if ((limite[0] = searchCollision(tetriminos[0], gameMap, tetriMap, 0)) == 1)
		return (1);
	return (0);
}

export const rightCollisionHandler = (tetriminos, gameMap, tetriMap) => {
	var limite = reachMapLimite(tetriminos[0], tetriMap, 1)
	if (limite[0] == 1)
		return (1);
	if ((limite[0] = searchCollision(tetriminos[0], gameMap, tetriMap, 1)) == 1)
		return (1);
	return (0);
}

export const collisionHandler = (lgn, col, gameMap, tetriMap) => {
	var i = 0;
	var j = 0;
	var lgn_max;

	if (lgn == 19)
		return (0);
	while (i < 4)
	{
		while (j < 4)
		{
			if (tetriMap[i][j] == 1)
			{
				if ((lgn_max = lgn + 1 + i) == 20)
					return (1);
				if (gameMap[lgn_max][col + j] == 2)
					return (1);
			}
			j++;
		}
		j = 0;
		i++;
	}
	return (0);
}

export const fillMap = (lgn, col, gameMap, tetriMap, CaseState) => {
	var i = 0;
	var j = 0;
	var tmp_col = col;

	while (i < 4)
	{
		while (j < 4)
		{
			if (tetriMap[i][j])
			_.fill(gameMap[lgn], CaseState, tmp_col, tmp_col + 1)
			tmp_col++;
			j++;
		}
		lgn++;
		tmp_col = col;
		i++;
		j = 0;
	}
	return (gameMap);
}
