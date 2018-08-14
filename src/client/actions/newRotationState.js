import {NEW_ROT_STATE} from '../constants/action_types.js';

export function newRotationState(new_rotation) {
	console.log("dans laction newrota : " + new_rotation);
	return {
		type: NEW_ROT_STATE,
		rotationPayload: new_rotation,
	}
}
