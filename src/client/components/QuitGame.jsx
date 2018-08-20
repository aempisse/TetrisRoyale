import React from 'react'
import {connect} from 'react-redux'
import action from '../actions/actionsCreator'

const QuitGame = ({playerName, game, quitGame}) => {
    const handleClick = e => {
        e.preventDefault()
        quitGame({playerName, gameId : game.id})
    }
    
    return (
        <button onClick={handleClick}>
            Quit Game
        </button>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        quitGame: (data) => dispatch(action.quitGame(data))
    }
}

export default connect(undefined, mapDispatchToProps)(QuitGame)
