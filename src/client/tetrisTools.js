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

const moveIsValid = (position, piece, grid) => {
	let isValid = true
    piece.shape.forEach((line, yIndex) => {
        line.forEach((cell, xIndex) => {
            if (cell === 0)
                return
			if (position.x + xIndex < 0 ||
				position.x + xIndex >= grid[0].length ||
				position.y + yIndex < 0 ||
				position.y + yIndex >= grid.length ||
				grid[position.y + yIndex][position.x + xIndex]
			)
				isValid = false
        })
    })
    return isValid
}

const movePiece = (move, piece, grid) => {
    const newPosition = {
        x: piece.position.x + move.x,
        y: piece.position.y + move.y
    }
	if (!moveIsValid(newPosition, piece, grid))
		return piece
    return {...piece, position: newPosition}
}

export default {
    placePieceIntoGrid,
    movePiece
}