import {connect} from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => {
    return {
        playerName: state.playerName
    }
}

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer