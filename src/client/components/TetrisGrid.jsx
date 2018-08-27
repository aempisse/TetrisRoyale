import React from 'react'
import { Grid } from '@material-ui/core'
import tools from '../tetrisTools'

const TetrisGrid = (props) => {
    const {
        grid,
        currentPiece,
        classes
    } = props

    const newGrid = tools.placePieceIntoGrid(currentPiece, grid)

    return (
        <React.Fragment>
            {newGrid.map((line, yIndex) => yIndex > 1 &&
                <Grid
                    key={yIndex}
                    container
                    direction="row"
                    wrap="nowrap"
                    justify="center"
                    className={classes.line}
                >
                    {line.map((cell, xIndex) => 
                        <Grid
                            item
                            key={xIndex}
                        >
                            <div className={ cell === 1 ? classes.full : classes.cell }>
                            </div>
                        </Grid>
                    )}
                </Grid>
            )}
        </React.Fragment>
    )
}

export default TetrisGrid