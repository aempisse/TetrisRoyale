import React from 'react'
import {connect} from 'react-redux'
import PlayerName from './PlayerName';
import CreateGame from '../components/CreateGame'
import GameList from '../components/GameList'
import action from '../actions/actionsCreator'

const Home = ({getGames}) => {
    getGames()
    return (
        <React.Fragment>
            <PlayerName />
            <CreateGame />
            <GameList />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getGames: () => dispatch(action.getGames())
    }
}

export default connect(undefined, mapDispatchToProps)(Home)
