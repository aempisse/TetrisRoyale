import React from 'react'

const PlayerNameForm = ({registerPlayer}) => {
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
			<label htmlFor="inputName">
				Name:
				<input
					ref = { node => {
						input = node
					}}
					type="text"
					name="inputName" 
				/>
			</label>
			<input type="submit" value="OK" />
		</form>
  )
}

export default PlayerNameForm