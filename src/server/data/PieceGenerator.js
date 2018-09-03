export default class PieceGenerator {
    
    constructor() {
        this.modulus = 7
        this.multiplier = Math.floor((Math.random() * 18) + 3) // [3 => 20]
        this.increment = Math.floor((Math.random() * 27) + 11) // [11 => 37]
    }

    generatePiece(n) {
        let pieceId = (Math.pow(n, this.multiplier) + this.increment) % this.modulus
        
        const newPiece = {
            shape: pieceShapes[pieceId],
            position: {x: 0, y: 0},
            color: 'default'
        }
        return newPiece
    }
}

const pieceShapes = [
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [1,1],
        [1,1]
    ],
    [
        [0,1,0],
        [1,1,1],
        [0,0,0]
    ],
    [
        [0,1,1],
        [1,1,0],
        [0,0,0]
    ],
    [
        [1,1,0],
        [0,1,1],
        [0,0,0]
    ],
    [
        [1,0,0],
        [1,1,1],
        [0,0,0]
    ],
    [
        [0,0,1],
        [1,1,1],
        [0,0,0]
    ],
]