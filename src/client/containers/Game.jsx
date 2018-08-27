import React from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import TetrisGridContainer from './TetrisGridContainer'
import QuitGame from "../components/QuitGame"

const Game = ({playerName, game, classes}) => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Grid
                    container
                    direction="column"
					justify="space-evenly"
                    className={classes.padding}
                >
                    <Grid item  xs={12}>
                        <Typography variant="headline">
                            Ready to play, {playerName} ?
                        </Typography>
                    </Grid>
                    <Grid item  xs={12}>
                        <Typography variant="subheading">
                            Game #{game.id}
                        </Typography>
                        <List>
                            <Divider />
                            {game.players.map(player => 
                                <ListItem key={player.id} >
                                    <ListItemText primary={player.playerName} />
                                </ListItem>)}
                            <Divider />
                        </List>
                    </Grid>
                    <QuitGame playerName={playerName} game={game} />
                </Grid>
            </Grid>
            <Grid item xs={8} className={classes.padding}>
                <TetrisGridContainer />
            </Grid>
        </Grid>
    )
}

const styles = {
    padding: {
        padding: '12px 24px'
    }
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName,
        game: state.game
    }
}

export default compose(
    withStyles(styles, {
        name: "Game"
    }),
    connect(mapStateToProps)
)(Game)