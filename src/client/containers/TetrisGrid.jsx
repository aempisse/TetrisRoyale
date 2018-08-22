import React from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const TetrisGrid = ({grid, classes}) => {
    return (
        <React.Fragment>
            {grid.map((line, yIndex) => yIndex > 1 &&
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
                            <div className={classes.cell}>
                                {/* {cell} */}
                            </div>
                        </Grid>
                    )}
                </Grid>
            )}
        </React.Fragment>
    )
}

const styles = {
    layout: {
        // padding: '0 45'
    },
    line: {

    },
    cell: {
        border: '0.5px solid grey',
        width: 22,
        height: 22
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid
    }
}

export default compose(
    withStyles(styles, {
        name: 'TetrisGrid'
    }),
    connect(mapStateToProps)
)(TetrisGrid)