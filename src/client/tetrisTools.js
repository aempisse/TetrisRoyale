const placePieceIntoGrid = (piece, originalGrid) => {
    let newGrid = originalGrid.map(l => l.slice())
    piece.shape.forEach((line, yIndex) =>
        line.forEach((cell, xIndex) =>
            newGrid[piece.position.y + yIndex][piece.position.x + xIndex] = cell
        )
    )
    return newGrid
}

const movePiece = (move, piece, grid) => {
    const newPosition = {
        x: piece.position.x + move.x,
        y: piece.position.y + move.y
    }
    if (newPosition.x < 0 || (newPosition.x + piece.shape[0].length) > grid[0].length)
        return piece

    if (newPosition.y < 0 || (newPosition.y + piece.shape.length) > grid.length)
        return piece

    const newPiece = {...piece, position: newPosition}
    return newPiece
}

export default {
    placePieceIntoGrid,
    movePiece
}