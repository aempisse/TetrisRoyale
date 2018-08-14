import {EXIT_GAME_ROOM} from '../constants/action_types.js';

export function exitGameRoom () {
    return {type: EXIT_GAME_ROOM,
            pageIndexPayload: 1,};
}