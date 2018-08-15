import React from 'react'
import PlayerNameForm from './PlayerNameForm'
import GameList from './GameList'

const Home = ({playerName}) => {
    if (playerName !== '')
        return <GameList />
    else
        return <PlayerNameForm /> 
}

export default Home
