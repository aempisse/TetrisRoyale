import { compose } from 'redux'
import {connect} from 'react-redux'
import lifecycle from 'react-pure-lifecycle'
import { withStyles } from '@material-ui/core/styles'
import TetrisGrid from '../components/TetrisGrid'
import action from '../actions/actionsCreator'
// import tools from '../tetrisTools'

const mapStateToProps = state => {
    // const currentPiece = state.currentPiece
    // const currentGrid = state.grid

    // const newGrid = tools.placePieceIntoGrid(currentPiece, currentGrid)

    return {
        grid: state.grid,
        currentPiece: state.currentPiece
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGrid: data => dispatch(action.updateGrid(data)),
        getNewPiece: () => dispatch(action.getNewPiece())
    }
}

const componentDidMount = props => {
    props.getNewPiece()
}

const methods = {
    componentDidMount
}

const styles = {
    cell: {
        border: '0.5px solid grey',
        width: 22,
        height: 22
    },
    empty: {
        backgroundColor: 'inherit'
    },
    full: {
        border: '0.5px solid red',
        backgroundColor: '#993339',
        width: 22,
        height: 22
    }
}

const TetrisGridContainer = compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle(methods),
)(TetrisGrid)

export default TetrisGridContainer