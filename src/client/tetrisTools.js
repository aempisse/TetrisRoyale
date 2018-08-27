const placePieceIntoGrid = (piece, originalGrid) => {
    let newGrid = originalGrid.map(l => l.slice())

    piece.forEach((line, yIndex) =>
        line.forEach((cell, xIndex) =>
            newGrid[yIndex + 2][xIndex] = cell
        )
    )

    return newGrid
}

export default {
    placePieceIntoGrid
}