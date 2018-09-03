import { compose } from 'redux'
import {connect} from 'react-redux'
import lifecycle from 'react-pure-lifecycle'
import { withStyles } from '@material-ui/core/styles'
import TetrisGrid from '../components/TetrisGrid'
import action from '../actions/actionsCreator'
// import tools from '../tetrisTools'

const handleKeyPress = (event, props) => {
    const {
        moveCurrentPiece
    } = props
    event.preventDefault()

    switch (event.key) {
        case 'ArrowLeft':
            moveCurrentPiece({x: -1, y: 0})
            break
        case 'ArrowRight':
            moveCurrentPiece({x: 1, y: 0})
            break
        case 'ArrowDown':
            moveCurrentPiece({x: 0, y: 1})
            break
        default:
            break
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        currentPiece: state.currentPiece
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGrid: data => dispatch(action.updateGrid(data)),
        // updateCurrentPiece: data => dispatch(action.updateCurrentPiece(data)),
        moveCurrentPiece: data => dispatch(action.moveCurrentPiece(data)),
        getNewPiece: () => dispatch(action.getNewPiece())
    }
}

const eventClosure = () => {
    let eventHandler

    const componentDidMount = props => {
        eventHandler = event => handleKeyPress(event, props)
        document.addEventListener('keypress', eventHandler)
        props.getNewPiece()
    }
    
    const componentWillUnmount = props => {
        document.removeEventListener('keypress', eventHandler)
    }

    return {
        componentDidMount,
        componentWillUnmount
    }
}

const styles = {
    cell: {
        boxSizing: 'border-box',
        border: '0.5px solid grey',
        width: 22,
        height: 22
    },
    full: {
        border: '3px solid ',
        borderColor: '#223345 #394A56 #394A56 #223345',
        backgroundColor: '#2D3E50',
    }
}

const TetrisGridContainer = compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle(eventClosure()),
)(TetrisGrid)

export default TetrisGridContainer