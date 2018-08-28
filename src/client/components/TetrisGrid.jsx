import React from 'react'
import { Grid } from '@material-ui/core'
import tools from '../tetrisTools'

const TetrisGrid = (props) => {
    const {
        grid,
        currentPiece,
        classes
    } = props

    let gridToRender = grid
    if(Object.keys(currentPiece).length !== 0)
        gridToRender = tools.placePieceIntoGrid(currentPiece, grid)

    return (
        <React.Fragment>
            {gridToRender.map((line, yIndex) => yIndex > 1 &&
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
                            <div className={
                                `${classes.cell} ${cell === 1 && classes.full}`}>
                            </div>
                        </Grid>
                    )}
                </Grid>
            )}
        </React.Fragment>
    )
}

export default TetrisGrid