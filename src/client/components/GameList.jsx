import React from "react"
import {connect} from "react-redux"
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from '@material-ui/core'
import action from '../actions/actionsCreator'

const PlayerListItem = ({player}) => {
    return (
        <ListItem>
            <ListItemText primary={player.playerName} />
        </ListItem>
    )
}

const GameListItem = ({game, playerName, joinGame}) => {
    const handleClick = () => {
        console.log('click')
        if (playerName !== '')
            joinGame({playerName, gameId: game.id})
    }

    const playerList = game.players.map(player => 
        <PlayerListItem key={player.id} player={player} />
    )

    const primary = "Game #" + game.id

    return (
        <ListItem button onClick={handleClick}>
            <ListItemText primary={primary} secondary="List of players :" />
                <List>
                    {playerList}
                </List>
        </ListItem>
    )
}

const GameList = ({gameList, playerName, joinGame}) => {

    const list = gameList.map(game =>
            <GameListItem key={game.id} game={game} playerName={playerName} joinGame={joinGame} />
    )

    return (
        <List>
            {list}
        </List>
    )
}

const mapStateToProps = state => {
    return {
        gameList: state.gameList,
        playerName: state.playerName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinGame: (data) => dispatch(action.joinGame(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)