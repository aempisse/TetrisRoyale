import reducer from '../../src/client/reducers/reducer'
import action from '../../src/client/actions/actionsCreator'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toStrictEqual(
            {
                playerName: '',
                game: {},
                gameList: []
            }
        )
    })

    it('should handle UPDATE_PLAYERNAME', () => {
        expect(reducer(undefined, action.updatePlayerName('test'))).toStrictEqual(
            {
                playerName: 'test',
                game: {},
                gameList: []
            }
        )

        expect(reducer(
            {
                playerName: 'before',
                game: {},
                gameList: []
            }, action.updatePlayerName('after')))
        .toStrictEqual(
            {
                playerName: 'after',
                game: {},
                gameList: []
            }
        )
    })

    it('should handle UPDATE_GAMELIST', () => {
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
                playerName: '',
                game: {},
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
                playerName: '',
                game: {},
                gameList: [
                    {id: '0123', players: [
                        {id: '42', playerName: 'test'}
                    ]}
                ]
            }, action.updateGameList(data)))
        .toStrictEqual(
            {
                playerName: '',
                game: {},
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

    it('should handle UPDATE_GAME', () => {
        const data =
            {
                id: '0123',
                players: [
                    {id: '42', playerName: 'test'}
                ]
            }

        expect(reducer(undefined, action.updateGame(data))).toStrictEqual(
            {
                playerName: '',
                game: {
                    id: '0123',
                    players: [
                        {id: '42', playerName: 'test'}
                    ]
                },
                gameList: []
            }
        )

        expect(reducer(
            {
                playerName: '',
                game: {
                    id: '4567',
                    players: [
                        {id: '24', playerName: 'alsoTest'}
                    ]
                },
                gameList: []
            }, action.updateGame(data)))
        .toStrictEqual(
            {
                playerName: '',
                game: {
                    id: '0123',
                    players: [
                        {id: '42', playerName: 'test'}
                    ]
                },
                gameList: []
            }
        )
    })

})
