const placePieceIntoGrid = (piece, originalGrid) => {
    let newGrid = originalGrid.map(l => l.slice())
    piece.shape.forEach((line, yIndex) =>
		line.forEach((cell, xIndex) => {
			if (cell)
            	newGrid[piece.position.y + yIndex][piece.position.x + xIndex] = cell
		})
    )
    return newGrid
}

const moveIsValid = (move, piece, grid) => {
    const position = {
        x: piece.position.x + move.x,
        y: piece.position.y + move.y
    }

    for (let yIndex = 0; yIndex < piece.shape.length; yIndex++) {
        for (let xIndex = 0; xIndex < piece.shape[yIndex].length; xIndex++) {
            if (piece.shape[yIndex][xIndex] === 0)
                break
            if (position.x + xIndex < 0 ||
                position.x + xIndex >= grid[0].length ||
                position.y + yIndex < 0 ||
                position.y + yIndex >= grid.length ||
                grid[position.y + yIndex][position.x + xIndex]
            )
                return false
        }
    }
    return true
}

const rotatePiece = (piece, grid) => {
    return piece
}

export default {
    placePieceIntoGrid,
    moveIsValid,
    rotatePiece
}
