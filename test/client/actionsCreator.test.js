import action from "../../src/client/actions/actionsCreator"

describe('updateGameList', () => {
    it('should create an action to update the game list', () => {
        const data = 'test'
        const expectedAction = {
            type: 'UPDATE_GAMELIST',
            data
        }
        expect(action.updateGameList(data)).toStrictEqual(expectedAction)
    })
})

describe('updatePlayerName', () => {
    it('should create an action to update the player\'s name' , () => {
        const data = 'test'
        const expectedAction = {
            type: 'UPDATE_PLAYERNAME',
            data
        }
        expect(action.updatePlayerName(data)).toStrictEqual(expectedAction)
    })
})

describe('updateGame', () => {
    it('should create an action to update the player\'s game', () => {
        const data = 'test'
        const expectedAction = {
            type: 'UPDATE_GAME',
            data
        }
        expect(action.updateGame(data)).toStrictEqual(expectedAction)
    })
})

describe('registerPlayer', () => {
    it('should create an action to register the player server-side' , () => {
        const data = 'test'
        const expectedAction = {
            type: 'SERVER/REGISTER_PLAYER',
            data
        }
        expect(action.registerPlayer(data)).toStrictEqual(expectedAction)
    })
})

describe('createGame', () => {
    it('should create an action to create a game server-side' , () => {
        const data = 'test'
        const expectedAction = {
            type: 'SERVER/CREATE_GAME',
            data
        }
        expect(action.createGame(data)).toStrictEqual(expectedAction)
    })
})

describe('joinGame', () => {
    it('should create an action to join a game server-side' , () => {
        const data = 'test'
        const expectedAction = {
            type: 'SERVER/JOIN_GAME',
            data
        }
        expect(action.joinGame(data)).toStrictEqual(expectedAction)
    })
})

describe('quitGame', () => {
    it('should create an action to quit a game server-side' , () => {
        const data = 'test'
        const expectedAction = {
            type: 'SERVER/QUIT_GAME',
            data
        }
        expect(action.quitGame(data)).toStrictEqual(expectedAction)
    })
})

describe('getGameList', () => {
    it('should create an action to get the game list from server' , () => {
        const data = 'test'
        const expectedAction = {
            type: 'SERVER/GET_GAMELIST',
            data
        }
        expect(action.getGameList(data)).toStrictEqual(expectedAction)
    })
})
