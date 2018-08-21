import React from 'react'
import { connect } from 'react-redux'
import AppHeader from '../components/AppHeader'
import Home from './Home'
import Game from './Game'

const App = ({game}) => {
	return (
		<React.Fragment>
			<AppHeader />
			{ Object.keys(game).length === 0 ?
				<Home /> :
				<Game />
			}
		</React.Fragment>
	)
}


const mapStateToProps = (state) => {
	return {
		game: state.game
	}
}

export default connect(mapStateToProps)(App)