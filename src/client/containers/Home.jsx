import React from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'
import PlayerName from './PlayerName'
import CreateGame from '../components/CreateGame'
import GameList from '../components/GameList'
import action from '../actions/actionsCreator'

const Home = ({getGameList, classes}) => {
    getGameList()
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
				<Grid container className={classes.layout} spacing={32}>
					<Grid item xs={12} className={classes.item}>
						<Paper className={classes.paper}>
							<PlayerName />
						</Paper>
					</Grid>
					<Grid item xs={12} className={classes.item}>
						<CreateGame />
					</Grid>
					<Grid item xs={12} className={classes.item}>
						<GameList />
					</Grid>
				</Grid>
            </Grid>
        </Grid>
    )
}

const styles = {
    root: {
        flexGrow: 1
	},
	layout: {
		direction: 'column',
		justify: 'flex-start',
		alignItems: 'center'
	},
	item: {
		// margin: '32 0'
	},
	paper: {
		padding: 32
	}
}

const mapDispatchToProps = dispatch => {
    return {
        getGameList: () => dispatch(action.getGameList())
    }
}

export default compose(
	withStyles(styles, {
        name: 'Home',
    }),
	connect(undefined, mapDispatchToProps)
)(Home)
