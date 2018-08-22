import React from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, List, Divider, Grow } from '@material-ui/core'
import PlayerName from './PlayerName'
import CreateGame from '../components/CreateGame'
import GameList from '../components/GameList'
import action from '../actions/actionsCreator'

const Home = ({getGameList, classes}) => {
    getGameList()
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
				<Grid 
					container
					direction="column"
					justify="space-evenly"
					alignItems="center"
					className={classes.layout}
				>
					<Grid item xs={12} className={classes.first}>
						<PlayerName />
					</Grid>
					<Grid item xs={12} className={classes.second}>
						<Paper>
							<List>
								<CreateGame />
								<GameList />
							</List>
						</Paper>
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
		maxWidth: 720,
		margin: '0 auto'
	},
	first: {
		marginTop: 16,
		paddingTop: 16,
		paddingBottom: 16,
		paddingLeft: 24,
		paddingRight: 24
	},
	second: {
		width: '100%',
		marginTop: 16,
	},
	playerName: {
		paddingTop: 16,
		paddingBottom: 16,
		paddingLeft: 24,
		paddingRight: 24
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
