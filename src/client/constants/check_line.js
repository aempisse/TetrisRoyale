import _ from "lodash";

export const readMap = (gameMap) => {
	var nbr_lgn = 0;
	var i = 0;
	while (i < 20)
	{
		if (gameMap[i].includes(0) == false && gameMap[i].includes(1) == false)
			nbr_lgn++;
		i++;
	}
	var tmpGameMap = _.remove(gameMap ,function(n) {
		return !n.includes(0) && !n.includes(1); 
	})
	while (nbr_lgn > 0)
	{
		gameMap = _.concat([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], gameMap);
		nbr_lgn--;
	}
	return (gameMap);

}