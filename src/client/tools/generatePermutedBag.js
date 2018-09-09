import tetriminoShapes from './tetriminoShapes'

const generatePermutedBag = () => {
    let sequence = ['I', 'O', 'T', 'S', 'Z', 'L', 'J']

    for (let i = 6; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const tmp = sequence[i]
        sequence[i] = sequence[j]
        sequence[j] = tmp
    }

    const bag = sequence.map(id => {

        let position = {x: 0, y: 0}
        if (id === 'I')
            position = {x: 3, y: 0}
        else if (id === 'O')
            position = {x: 4, y: 0}

        return {
            type: id,
            shape: tetriminoShapes[id][0],
            position,
            rotation: 0
        }
    })

    return bag
}

export default generatePermutedBag
