import React from 'react'
import {connect} from 'react-redux'
import Greeting from '../components/Greeting'
import PlayerNameForm from '../components/PlayerNameForm'
import action from '../actions/actionsCreator'

const PlayerName = ({playerName, registerPlayer}) => {
    const isRegistered = playerName !== ''

    return (
        <React.Fragment>
            { isRegistered ?
                <Greeting playerName={playerName} /> :
                <PlayerNameForm registerPlayer={registerPlayer} />
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName
    }
}

const mapDispatchToProps = dispatch => {
	return {
		registerPlayer: data => dispatch(action.registerPlayer(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerName)