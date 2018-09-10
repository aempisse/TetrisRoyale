import React from 'react'
import { Grid } from '@material-ui/core'
import tools from '../tools/tetriminoMoves'

const TetrisGrid = (props) => {
    const {
        grid,
        tetriminoes,
        classes
    } = props

    let gridToRender = grid
    if(tetriminoes.length !== 0) {
        if (!tools.moveIsValid({x: 0, y: 0}, tetriminoes[0], grid))
            alert('OVERFLOW')
        else
            gridToRender = tools.placeTetriminoIntoGrid(tetriminoes[0], grid)
    }

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
