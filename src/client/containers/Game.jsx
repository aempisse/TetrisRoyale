import React from 'react'
import {connect} from 'react-redux'
import TetrisGrid from './TetrisGrid'
import QuitGame from "../components/QuitGame"

const Game = ({playerName, game}) => {
    return (
        <React.Fragment>
            <h2>
                Ready to play {playerName} ?
            </h2>
            <div>
                Game #{game.id}
            </div>
            <ul>
                {game.players.map(player => <li key={player.id} >{player.playerName}</li>)}
            </ul>
            <QuitGame playerName={playerName} game={game} />
            <TetrisGrid />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName,
        game: state.game
    }
}

export default connect(mapStateToProps)(Game)