export default class PieceGenerator {
    
    constructor() {
        this.modulus = 7
        this.multiplier = Math.floor((Math.random() * 18) + 3) // [3 => 20]
        this.increment = Math.floor((Math.random() * 27) + 11) // [11 => 37]
    }

    generatePiece(n) {
        let pieceId = (Math.pow(n, this.multiplier) + n * this.increment) % this.modulus
        return pieces[pieceId]
    }
}

const pieces = [
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