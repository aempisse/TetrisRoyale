import tetriminoShapes from './tetriminoShapes'

const placeTetriminoIntoGrid = (tetrimino, originalGrid) => {
    let newGrid = originalGrid.map(l => l.slice())
    tetrimino.shape.forEach((line, yIndex) =>
		line.forEach((cell, xIndex) => {
			if (cell)
            	newGrid[tetrimino.position.y + yIndex][tetrimino.position.x + xIndex] = cell
		})
    )
    return newGrid
}

const moveIsValid = (move, tetrimino, grid) => {
    const position = {
        x: tetrimino.position.x + move.x,
        y: tetrimino.position.y + move.y
    }

    for (let yIndex = 0; yIndex < tetrimino.shape.length; yIndex++) {
        for (let xIndex = 0; xIndex < tetrimino.shape[yIndex].length; xIndex++) {
            if (tetrimino.shape[yIndex][xIndex] === 0)
                continue
            if (position.x + xIndex < 0 ||
                position.x + xIndex >= grid[0].length ||
                position.y + yIndex < 0 ||
                position.y + yIndex >= grid.length ||
                grid[position.y + yIndex][position.x + xIndex] !== 0
            )
            // if (grid.indexOf(position.y + yIndex) === -1 ||
            //     grid[position.y + yIndex].indexOf(position.x + xIndex) === -1 ||
            //     grid[position.y + yIndex][position.x + xIndex] !== 0
            // )
                return false
        }
    }
    return true
}

const testWallKicks = (tetrimino, grid, tests) => {
    for (let i = 0; i < tests.length; i++) {
        if (moveIsValid(tests[i], tetrimino, grid))
            return {...tetrimino,
                position: {
                    x: tetrimino.position.x + tests[i].x,
                    y: tetrimino.position.y + tests[i].y
                }
            }
    }
    return undefined
}

const rotate = (tetrimino, grid) => {
    const newRotation = (tetrimino.rotation + 1) % 4
    const rotatedTetrimino = {
        type: tetrimino.type,
        shape: tetriminoShapes[tetrimino.type][newRotation],
        position: tetrimino.position,
        rotation: newRotation
    }

    if (tetrimino.type === 'I' && tetrimino.rotation === 0)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: -2, y: 0},
            {x: 1, y: 0},
            {x: -2, y: 1},
            {x: 1, y: -2}
        ]) || tetrimino)
    if (tetrimino.type === 'I' && tetrimino.rotation === 1)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: -1, y: 0},
            {x: 2, y: 0},
            {x: -1, y: -2},
            {x: 2, y: 1}
        ]) || tetrimino)
    if (tetrimino.type === 'I' && tetrimino.rotation === 2)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: 2, y: 0},
            {x: -1, y: 0},
            {x: 2, y: -1},
            {x: -1, y: 2}
        ]) || tetrimino)
    if (tetrimino.type === 'I' && tetrimino.rotation === 3)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: -2, y: 0},
            {x: 1, y: 2},
            {x: -2, y: -1}
        ]) || tetrimino)

    if (tetrimino.rotation === 0)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: -1, y: 0},
            {x: -1, y: 1},
            {x: 0, y: 2},
            {x: -1, y: -2}
        ]) || tetrimino)
    if (tetrimino.rotation === 1)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 0, y: -2},
            {x: 1, y: 2}
        ]) || tetrimino)
    if (tetrimino.rotation === 2)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 1, y: -1},
            {x: 0, y: 2},
            {x: 1, y: 2}
        ]) || tetrimino)
    if (tetrimino.rotation === 3)
        return (testWallKicks(rotatedTetrimino, grid, [
            {x: 0, y: 0},
            {x: -1, y: 0},
            {x: -1, y: 1},
            {x: 0, y: -2},
            {x: -1, y: -2}
        ]) || tetrimino)

    return tetrimino
}

export default {
    placeTetriminoIntoGrid,
    moveIsValid,
    rotate
}
