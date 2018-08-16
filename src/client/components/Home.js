import React from 'react'
import PlayerNameForm from './PlayerNameForm'
import GameListContainer from '../containers/GameListContainer'

const Home = ({playerName}) => {
    if (playerName !== '')
        return <GameListContainer playerName={playerName} />
    else
        return <PlayerNameForm /> 
}

export default Home
