import React from "react"
import request from '../socketClient'

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

const GameList = ({gameList, playerName}) => {
    // request.gameList()
    const list = gameList.map(game =>
        <GameListItem key={game.id} game={game} />
    )

    return (
        <ul>
            <h2>Hello {playerName} !</h2>
            <h3>List of games</h3>
            {list}
        </ul>
    )
}

export default GameList