import React from 'react'
import {connect} from 'react-redux'

const Game = ({game}) => {
    return (
        <React.Fragment>
            <div>
                Game #{game.id}
            </div>
            <ul>
                {game.players.map(player => <li key={player.id} >{player.playerName}</li>)}
            </ul>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(Game)