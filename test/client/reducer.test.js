import reducer from '../../src/client/reducers/reducer'
import action from '../../src/client/actions/actionsCreator'

describe('reducer', () => {

    const initialState = {
        playerName: '',
        tetriminoes: [],
        game: {},
        grid: Array(22).fill(Array(10).fill(0)),
        gameList: []
    }

    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toStrictEqual(initialState)
    })

    test('should handle UPDATE_PLAYERNAME', () => {
        expect(reducer(undefined, action.updatePlayerName('test'))).toStrictEqual(
            { ...initialState, playerName: 'test' }
        )

        expect(reducer(
            { ...initialState, playerName: 'before'}, action.updatePlayerName('after')))
        .toStrictEqual(
            { ...initialState, playerName: 'after'}
        )
    })

    test('should handle UPDATE_GAMELIST', () => {
        const data = [
            {id: '0123', players: [
                {id: '42', playerName: 'test'}
            ]},
            {id: '4567', players: [
                {id: '24', playerName: 'alsoTest'}
            ]}
        ]

        expect(reducer(undefined, action.updateGameList(data))).toStrictEqual(
            {
                ...initialState,
                gameList: [
                    {id: '0123', players: [
                        {id: '42', playerName: 'test'}
                    ]},
                    {id: '4567', players: [
                        {id: '24', playerName: 'alsoTest'}
                    ]}
                ]
            }
        )

        expect(reducer(
            {
                ... initialState,
                gameList: [
                    {id: '0123', players: [
                        {id: '42', playerName: 'test'}
                    ]}
                ]
            }, action.updateGameList(data)))
        .toStrictEqual(
            {
                ...initialState,
                gameList: [
                    {id: '0123', players: [
                        {id: '42', playerName: 'test'}
                    ]},
                    {id: '4567', players: [
                        {id: '24', playerName: 'alsoTest'}
                    ]}
                ]
            }
        )
    })

    test('should handle UPDATE_GAME', () => {
        const data =
            {
                id: '0123',
                players: [
                    {id: '42', playerName: 'test'}
                ]
            }

        expect(reducer(undefined, action.updateGame(data))).toStrictEqual(
            {
                ...initialState,
                game: {
                    id: '0123',
                    players: [
                        {id: '42', playerName: 'test'}
                    ]
                }
            }
        )

        expect(reducer(
            {
                ...initialState,
                game: {
                    id: '4567',
                    players: [
                        {id: '24', playerName: 'alsoTest'}
                    ]
                }
            }, action.updateGame(data)))
        .toStrictEqual(
            {
                ...initialState,
                game: {
                    id: '0123',
                    players: [
                        {id: '42', playerName: 'test'}
                    ]
                }
            }
        )
    })

})
