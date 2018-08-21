import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const PlayerNameForm = ({registerPlayer, classes}) => {
	let input

	const handleSubmit = e => {
		e.preventDefault()
		if (!input.value.trim()) {
			return
		}
		registerPlayer(input.value)
	}

  	return (
		<form
			onSubmit={handleSubmit}
		>
			<TextField 
				inputRef={ node => {
					input = node
				}}
				label='Enter your player name :'
				helperText="it's required to create or join a game"
				placeholder='player name'
				inputProps={{
					'aria-label': 'Description',
				  }}
				className={classes.nameField}
			/>
			<Button 
				variant="contained"
				color="primary"
				type="submit"
				className={classes.submitButton}
			>
				OK
			</Button>
		</form>
  )
}

const styles = {
	nameField: {
		minWidth: 240
	},
	submitButton: {
		marginLeft: 32
	}
}

export default withStyles(styles, {
	name: 'PlayerNameForm',
})(PlayerNameForm)