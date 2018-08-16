import React from 'react'
import {connect} from 'react-redux'
import PlayerNameForm from './PlayerNameForm'
import GameList from '../components/GameList'

const Home = ({playerName}) => {
    if (playerName !== '')
        return <GameList />
    else
        return <PlayerNameForm /> 
}

const mapStateToProps = state => {
    return {
        playerName: state.playerName
    }
}

export default connect(mapStateToProps)(Home)
