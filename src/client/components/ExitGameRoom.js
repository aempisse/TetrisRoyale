import React from "react";
import store from "../store/index.js";
import {exitGameRoom} from "../actions/exitGameRoom.js";

const handleClick = () => {
	store.dispatch(exitGameRoom());
}

const ExitGameRoomButton = ({}) => {
	return (
		<div style={{margin: '10% 0px 0px 20px'}}>
            	<button onClick={handleClick}>Exit The Room</button>
		</div>
	)
}

export default ExitGameRoomButton;