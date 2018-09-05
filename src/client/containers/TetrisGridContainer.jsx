import { compose } from 'redux'
import {connect} from 'react-redux'
import lifecycle from 'react-pure-lifecycle'
import { withStyles } from '@material-ui/core/styles'
import TetrisGrid from '../components/TetrisGrid'
import action from '../actions/actionsCreator'
import tools from '../tetrisTools'

const handleKeyPress = (event, props) => {
    const {
        moveCurrentPiece
    } = props

    switch (event.key) {
        case 'ArrowLeft':
            event.preventDefault()
            moveCurrentPiece({x: -1, y: 0})
            break
        case 'ArrowRight':
            event.preventDefault()
            moveCurrentPiece({x: 1, y: 0})
            break
        case 'ArrowDown':
            event.preventDefault()
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
        moveCurrentPiece: data => dispatch(action.moveCurrentPiece(data)),
        getNewPiece: () => dispatch(action.getNewPiece()),
        anchorPiece: data => dispatch(action.anchorPiece(data))
    }
}

const lifecycleClosure = () => {
    let eventHandler
    let interval

    const componentDidMount = props => {
        eventHandler = event => handleKeyPress(event, props)
        document.addEventListener('keypress', eventHandler)
        interval = window.setInterval(() => {
            props.moveCurrentPiece({x: 0, y: 1})
        }, 500)
        props.getNewPiece()
    }

    const componentDidUpdate = (props, oldProps) => {
        if (props.grid !== oldProps.grid)
            props.anchorPiece(props.grid)
        if (Object.keys(props.currentPiece).length === 0)
            props.getNewPiece()
    }

    const componentWillUnmount = props => {
        document.removeEventListener('keypress', eventHandler)
        clearInterval(interval)
    }

    return {
        componentDidMount,
        componentDidUpdate,
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
    lifecycle(lifecycleClosure()),
)(TetrisGrid)

export default TetrisGridContainer
