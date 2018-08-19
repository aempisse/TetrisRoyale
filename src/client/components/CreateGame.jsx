import React from 'react'
import {connect} from 'react-redux'
import action from '../actions/actionsCreator'

const CreateGame = ({playerName, createGame}) => {
    return (
        <button onClick={() => createGame(playerName)}>
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