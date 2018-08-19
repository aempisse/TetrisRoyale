import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Game from './Game'

const App = ({inGame}) => {
	return (
		// <React.Fragment>
		// 	{ inGame ?
		// 		<Home /> :
		// 		<Game />	
		// 	}
		// </React.Fragment>
		<Home />
	)
}

const mapStateToProps = (state) => {
	return {
		inGame: state.inGame
	}
}

export default connect(mapStateToProps)(App)