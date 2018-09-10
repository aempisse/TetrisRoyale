import { compose } from 'redux'
import {connect} from 'react-redux'
import lifecycle from 'react-pure-lifecycle'
import { withStyles } from '@material-ui/core/styles'
import TetrisGrid from '../components/TetrisGrid'
import action from '../actions/actionsCreator'

const handleKeyPress = (event, props) => {
    const {
        moveTetrimino,
        rotateTetrimino
    } = props

    switch (event.key) {
        case 'ArrowLeft':
            event.preventDefault()
            moveTetrimino({x: -1, y: 0})
            break
        case 'ArrowRight':
            event.preventDefault()
            moveTetrimino({x: 1, y: 0})
            break
        case 'ArrowDown':
            event.preventDefault()
            moveTetrimino({x: 0, y: 1})
            break
        case 'ArrowUp':
            event.preventDefault()
            rotateTetrimino()
            break
        default:
            break
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        tetriminoes: state.tetriminoes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        generateNewTetriminoes: () => dispatch(action.generateNewTetriminoes()),
        moveTetrimino: data => dispatch(action.moveTetrimino(data)),
        rotateTetrimino: () => dispatch(action.rotateTetrimino()),
        anchorTetrimino: data => dispatch(action.anchorTetrimino(data))
    }
}

const lifecycleClosure = () => {
    let eventHandler
    let interval

    const componentDidMount = props => {
        eventHandler = event => handleKeyPress(event, props)
        document.addEventListener('keypress', eventHandler)
        interval = window.setInterval(() => {
            props.moveTetrimino({x: 0, y: 1})
        }, 500)
        props.generateNewTetriminoes()
    }

    const componentDidUpdate = (props, oldProps) => {
        if (props.grid !== oldProps.grid)
            props.anchorTetrimino(props.grid)
        if (props.tetriminoes[0] !== oldProps.tetriminoes[0]) {
            clearInterval(interval)
            interval = window.setInterval(() => {
                props.moveTetrimino({x: 0, y: 1})
            }, 500)
        }
        if (props.tetriminoes.length <= 5)
            props.generateNewTetriminoes()
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
