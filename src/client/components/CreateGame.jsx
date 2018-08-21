import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemText } from '@material-ui/core'
import action from '../actions/actionsCreator'

const CreateGame = ({playerName, createGame}) => {
    const handleClick = e => {
        e.preventDefault()
        createGame(playerName)
    }
    
    return (
        <ListItem button onClick={handleClick}>
            <ListItemText primary="New Game"/>
        </ListItem>
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