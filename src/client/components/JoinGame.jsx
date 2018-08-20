import React from "react"
import {connect} from "react-redux"
import action from "../actions/actionsCreator"

const JoinGame = ({children, game, playerName, joinGame}) => {
    const handleClick = e => {
        e.preventDefault()
        if (playerName !== '')
            joinGame({playerName, gameId: game.id})
    }

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinGame: (data) => dispatch(action.joinGame(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)