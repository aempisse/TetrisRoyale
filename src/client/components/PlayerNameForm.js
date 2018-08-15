import React from 'react'
import {register} from "../socketClient.js"

const NameForm = () => {
	let input

  	return (
		<form
			style={{margin: '10% auto'}} 
			onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				register(input.value)
			}}
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

export default NameForm