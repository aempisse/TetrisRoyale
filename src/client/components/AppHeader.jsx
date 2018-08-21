import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        flexGrow: 1
    }
}

const AppHeader = (props) => {
    const { classes } = props
    return (
        <div className={classes.root} >
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        Tetris Royale
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(AppHeader)