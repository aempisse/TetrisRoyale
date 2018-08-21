import React from 'react'
import {connect} from 'react-redux'

const TetrisGridCell = ({xIndex, cell}) => {
    return (
        <div>
            {xIndex}
        </div>
    )
}

const TetrisGridLine = ({yIndex, line}) => {
    return (
        <div>
            {line.map((cell, index) => 
                <TetrisGridCell key={index} xIndex={index} cell={cell}/>
            )}
        </div>
    )
}

const TetrisGrid = ({grid}) => {
    return (
        <React.Fragment>
            {grid.map((line, index) => 
                <TetrisGridLine key={index} yIndex={index} line={line} />
            )}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        grid: state.grid
    }
}

export default connect(mapStateToProps)(TetrisGrid)