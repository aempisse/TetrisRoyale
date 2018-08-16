import React from 'react'
import {connect} from 'react-redux'
import action from '../actions/actionsCreator'

const PlayerNameForm = ({playerName, registerPlayer}) => {
	let input

  	return (
		<form
			style={{margin: '10% auto'}} 
			onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				registerPlayer(input.value)
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

const mapStateToProps = (state) => {
	return {
		playerName: state.playerName
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		registerPlayer: (data) => dispatch(action.registerPlayer(data))
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNameForm)