import React from "react"
import {connect} from "react-redux"
import JoinGame from "./JoinGame"

const PlayerListItem = ({player}) => {
    return <li>{player.playerName}</li>
}

const GameListItem = ({game}) => {
    const playerList = game.players.map(player => 
        <PlayerListItem key={player.id} player={player} />
    )

    return (
        <li>
            <JoinGame game={game}>
                <div>
                    Game #{game.id}
                </div>
                <div>
                    Players :
                    <ul>
                        {playerList}
                    </ul>
                </div>
            </JoinGame>
        </li>
    )
}

const GameList = ({gameList}) => {
    const list = gameList.map(game =>
        <GameListItem key={game.id} game={game} />
    )

    return (
        <ul>
            <h3>List of games</h3>
            {list}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        gameList: state.gameList
    }
}

export default connect(mapStateToProps, undefined)(GameList)