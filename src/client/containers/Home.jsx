import React from 'react'
import {connect} from 'react-redux'
import PlayerName from './PlayerName';
import CreateGame from '../components/CreateGame'
import GameList from '../components/GameList'
import action from '../actions/actionsCreator'

const Home = ({getGameList}) => {
    getGameList()
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
        getGameList: () => dispatch(action.getGameList())
    }
}

export default connect(undefined, mapDispatchToProps)(Home)
