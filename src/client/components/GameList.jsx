import React from "react"
import {connect} from 'react-redux'

const PlayerListItem = ({player}) => {
    return <li>{player.playerName}</li>
}

const ButtonWrapper = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log(props.game.id)
    }

    return (
        <button onClick={handleClick}>
            {props.children}
        </button>
    )
}

const GameListItem = ({game}) => {
    const playerList = game.players.map(player => 
        <PlayerListItem key={player.id} player={player} />
    )

    return (
        <li>
            <ButtonWrapper game={game}>
                <div>
                    Game #{game.id}
                </div>
                <div>
                    Players :
                    <ul>
                        {playerList}
                    </ul>
                </div>
            </ButtonWrapper>
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

export default connect(mapStateToProps)(GameList)