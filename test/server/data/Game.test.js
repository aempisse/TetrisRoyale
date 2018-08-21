import Game from "../../../src/server/data/Game"
import Player from "../../../src/server/data/Player"

describe('Game', () => {
    test('should create an object containing an id and an array', () => {
        const game = new Game('test')
        expect(game).toHaveProperty('id', 'test')
        expect(game).toHaveProperty('players', [])
    })

    describe('.addPlayer()', () => {
        const game = new Game('test')
        game.addPlayer('testName', 'testId')

        test('should add a player to the players array', () => {
            const expectedPlayer = new Player('testName', 'testId')
            expect(game.players).toContainEqual(expectedPlayer)
        })

        test('should not add a player with an already existing id', () => {
            game.addPlayer('otherName', 'testId')
            const expectedPlayer = new Player('otherName', 'testId')      
            expect(game.players).not.toContainEqual(expectedPlayer)  
        })
    })

    describe('.removePlayer()', () => {
        const game = new Game('test')
        game.addPlayer('testName', 'testId')

        test('should remove a player from the players array', () => {
            game.removePlayer('testId')
            expect(game.players).toStrictEqual([])
        })

        test('should do nothing if the id doesn\'t match any player', () => {
            const player = game.addPlayer('testName', 'testId')
            game.removePlayer('otherId')
            expect(game.players).toContain(player)
        })

        test('should do nothing if players array is already empty', () => {
            game.removePlayer('testId')
            expect(game.players).toStrictEqual([])
            game.removePlayer('otherId')
            expect(game.players).toStrictEqual([])
        })
    })

    describe('.getPlayerById()', () => {
        const game = new Game('test')
        
        test('should return the player matching the id', () => {
            const expectedPlayer = game.addPlayer('testName', 'testId')
            const player = game.getPlayerById('testId')
            expect(player).toBe(expectedPlayer)
        })

        test('should return undefined if the id doesn\'t match any player', () => {
            const player = game.getPlayerById('otherId')
            expect(player).toBeUndefined()
        })
    })
})