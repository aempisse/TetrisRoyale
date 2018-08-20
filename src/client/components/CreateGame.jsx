import React from 'react'
import {connect} from 'react-redux'
import action from '../actions/actionsCreator'

const CreateGame = ({playerName, createGame}) => {
    const handleClick = e => {
        e.preventDefault()
        createGame(playerName)
    }
    
    return (
        <button onClick={handleClick}>
            New Game
        </button>
    )
}

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (data) => dispatch(action.createGame(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)