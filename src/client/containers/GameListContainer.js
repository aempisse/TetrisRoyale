import {connect} from 'react-redux'
import GameList from '../components/GameList'

const mapStateToProps = state => {
    return {
        gameList: state.gameList
    }
}

const GameListContainer = connect(mapStateToProps)(GameList)

export default GameListContainer