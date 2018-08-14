export default class Piece {
    
    constructor() {
        this.modulus = 7
        this.multiplier = Math.floor((Math.random() * 18) + 3) // [3 => 20]
        this.increment = Math.floor((Math.random() * 27) + 11) // [11 => 37]
    }

    generatePiece(n) {
        let piece = (Math.pow(n, this.multiplier) + n * this.increment) % this.modulus
        return piece
    }
}

/*
let piece1 = new Piece()
let piece2 = new Piece()

let firstPlayerPiece1 = []
for (let i = 0; i < 30; i++) {
    firstPlayerPiece1[i] = piece1.generatePiece(i);
}
let secondPlayerPiece1 = []
for (let i = 0; i < 30; i++) {
    secondPlayerPiece1[i] = piece1.generatePiece(i);
}

let firstPlayerPiece2 = []
for (let i = 0; i < 30; i++) {
    firstPlayerPiece2[i] = piece2.generatePiece(i);
}
let secondPlayerPiece2 = []
for (let i = 0; i < 30; i++) {
    secondPlayerPiece2[i] = piece2.generatePiece(i);
}



console.log('==PIECE 1==')
console.log(firstPlayerPiece1)
console.log(secondPlayerPiece1)

console.log('==PIECE 2==')
console.log(firstPlayerPiece2)
console.log(secondPlayerPiece2)
*/