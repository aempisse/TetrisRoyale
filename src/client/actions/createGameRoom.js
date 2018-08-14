import {NEW_GAME_ROOM} from '../constants/action_types.js';

export function createGameRoom () {
    return {type: NEW_GAME_ROOM,
            pageIndexPayload: 2,};
}